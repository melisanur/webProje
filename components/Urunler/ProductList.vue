<!-- filepath: /c:/Users/Olcay/Desktop/mProjeWeb/components/Urunler/ProductList.vue -->
<template>
    <div class="container">
        <div class="ProductCount-Sorting">
            <div v-if="filteredProductCount !== null">
                <p style="font-weight: 500;margin-left: 3px;">{{ filteredProductCount }} Ürünü Göster</p>
            </div>
            <!-- Sıralama Seçenekleri -->
            <div class="sorting-options">
                <label for="sort">Sıralama ölçütü: </label>
                <div class="custom-select">
                    <select id="sort" v-model="selectedSort">
                        <option value="recommended">Önerilen</option>
                        <option value="newest">En Yeni</option>
                        <option value="pieceCount">Parça Sayısı: Yüksekten Düşüğe</option>
                        <option value="alphabetical">A-Z</option>
                    </select>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <!-- Sol Filtreleme Menüsü -->
        <aside class="filters">
            <div class="filter-group">

                <div v-if="hasActiveFilters">
                    <hr>
                    <h3 class="filter-header">Seçili Filtreler</h3>
                </div>
                <!-- Tüm Filtreleri Temizle Butonu -->
                <div v-if="hasActiveFilters" class="clear-filters">
                    <button @click="clearAllFilters" class="clear-button">
                        Tüm filtreleri Temizle
                    </button>
                </div>

                <!-- Seçilen Filtreler -->
                <div v-if="activeFilters.length > 0" class="selected-filters">
                    <span v-for="filter in activeFilters" :key="filter.key + filter.label" class="filter-tag"
                        @click="removeFilter(filter.key, filter.label)">
                        {{ filter.label }}
                        <span class="close-icon" @click="removeFilter(filter.key, filter.label)">×</span>
                    </span>
                </div>

                <!-- Ürün Türü Filtre Grubu -->

                <hr>
                <h3 @click="toggleFilter('type')" class="filter-header">
                    Ürün Türü
                    <img :class="{ rotated: isFilterExpanded('type') }" src="public/arrow-down.png" alt="Toggle Icon"
                        class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('type')" class="filter-options">
                    <div v-for="type in productTypes" :key="type" class="filter-option">
                        <input type="checkbox" :id="`type-${type}`" :value="type" v-model="filters.type" />
                        <label :for="`type-${type}`">
                            {{ type }} [{{ typeCounts[type] }}]
                        </label>
                    </div>
                </div>
            </div>

            <!-- Tema Filtre Grubu -->
            <div class="filter-group">
                <hr>
                <h3 @click="toggleFilter('theme')" class="filter-header">
                    Tema
                    <img :class="{ rotated: isFilterExpanded('theme') }" src="public/arrow-down.png" alt="Toggle Icon"
                        class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('theme')" class="filter-options">
                    <div v-for="theme in productThemes" :key="theme" class="filter-option">
                        <input type="checkbox" :id="`theme-${theme}`" :value="theme" v-model="filters.theme" />
                        <label :for="`theme-${theme}`">
                            {{ theme }} [{{ themeCounts[theme] }}]
                        </label>
                    </div>
                </div>
            </div>

            <!-- İlgi Alanı Filtre Grubu -->
            <div class="filter-group">
                <hr>
                <h3 @click="toggleFilter('category')" class="filter-header">
                    İlgi Alanı
                    <img :class="{ rotated: isFilterExpanded('category') }" src="public/arrow-down.png"
                        alt="Toggle Icon" class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('category')" class="filter-options">
                    <div v-for="category in productCategories" :key="category" class="filter-option">
                        <input type="checkbox" :id="`category-${category}`" :value="category"
                            :checked="filters.category.includes(category)"
                            @change="applyFilter('category', category)" />
                        <label :for="`category-${category}`">
                            {{ category }} [{{ categoryCounts[category] }}]
                        </label>
                    </div>
                </div>
            </div>

            <!-- Yaş Filtre Grubu -->
            <div class="filter-group">
                <hr />
                <h3 @click="toggleFilter('age')" class="filter-header">
                    Yaş
                    <img :class="{ rotated: isFilterExpanded('age') }" src="public/arrow-down.png" alt="Toggle Icon"
                        class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('age')" class="filter-options">
                    <div v-for="age in productAges" :key="age" class="filter-option">
                        <input type="checkbox" :id="`age-${age}`" :value="age" :checked="filters.category.includes(age)"
                            @change="applyFilter('age', age)" />
                        <label :for="`age-${age}`">
                            {{ age }} [{{ ageCounts[age] }}]
                        </label>
                    </div>
                </div>
            </div>

            <!-- Parça Sayısı Filtre Grubu -->
            <div class="filter-group">
                <hr>
                <h3 @click="toggleFilter('pieceCount')" class="filter-header">
                    Parça Sayısı
                    <img :class="{ rotated: isFilterExpanded('pieceCount') }" src="public/arrow-down.png"
                        alt="Toggle Icon" class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('pieceCount')" class="filter-options">
                    <div v-for="pieceCount in productPieceCounts" :key="pieceCount.label" class="filter-option">
                        <input type="checkbox" :id="`pieceCount-${pieceCount.label}`" :value="pieceCount.label"
                            v-model="filters.pieceCount" />
                        <label :for="`pieceCount-${pieceCount.label}`">
                            {{ pieceCount.label }} [{{ pieceCounts[pieceCount.label] }}]
                        </label>
                    </div>
                </div>
            </div>

            <!-- Öne Çıkanlar Filtre Grubu -->
            <div class="filter-group">
                <hr>
                <h3 @click="toggleFilter('special')" class="filter-header">
                    Öne çıkanlar
                    <img :class="{ rotated: isFilterExpanded('special') }" src="public/arrow-down.png" alt="Toggle Icon"
                        class="toggle-icon" />
                </h3>
                <div v-show="isFilterExpanded('special')" class="filter-options">
                    <div v-for="special in productSpecials" :key="special" class="filter-option">
                        <input type="checkbox" :id="`special-${special}`" :value="special" v-model="filters.special" />
                        <label :for="`special-${special}`">
                            {{ special }} [{{ specialCounts[special] }}]
                        </label>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Ürün Kartları -->
        <main class="products">
            <div v-if="filteredProducts.length === 0">Hiç ürün bulunamadı.</div>
            <div class="product-card" v-for="product in filteredProducts" :key="product.id">
                <div class="carousel">
                    <img v-for="(image, index) in product.images" :key="index" :src="image" :alt="product.name"
                        v-show="activeImageIndex[product.id] === index" class="product-image" />
                    <span v-if="isSpecialProduct(product)" class="special-product">{{ product.special }}</span>
                    <button v-if="canGoPrev(product.id)" @click="prevImage(product.id)" class="prev-button">
                        <img src="public/arrow-down.png" alt="Previous" class="rotate-270 carousel-icon-right" />
                    </button>
                    <button v-if="canGoNext(product.id)" @click="nextImage(product.id)" class="next-button">
                        <img src="public/arrow-down.png" alt="Next" class="rotate-90 carousel-icon-left" />
                    </button>
                </div>
                <div :class="['bars', activeImageIndex[product.id] === 0 ? 'bar-a' : 'bar-b']"></div>
                <div class="product-info">
                    <ul>
                        <li>
                            <img src="/starWars/birthday-cake.svg" alt="Yaş Iconu" class="age-icon" />
                            <span class="age">{{ product.age }}</span>
                        </li>
                        <li v-if="product.pieceCount !== null">
                            <img src="/starWars/brick-one-by-one-iso.svg" alt="Parça Sayısı" class="piece-icon" />
                            {{ product.pieceCount }}
                        </li>
                    </ul>

                    <div class="product-name">{{ product.name }}</div>
                    <div class="product-price">{{ product.price }} TL</div>
                </div>
                <div class="add-to-cart-container">
                    <div v-if="hover" class="quantity-controls">
                        <button @click="decreaseQuantity(product.id)">-</button>
                        <span>{{ quantities[product.id] || 1 }}</span>
                        <button @click="increaseQuantity(product.id)">+</button>
                    </div>
                    <button @click="addToCart(product.id)" class="add-to-cart-button" :class="{ hover: hover }">
                        Sepete Ekle
                    </button>
                </div>
                <div v-if="!hover" class="add-to-cart-placeholder">
                    Sepete Ekle
                </div>
            </div>
        </main>
    </div>
    <div class="bosluk"></div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useProductStore } from '@/store/products';

const productStore = useProductStore();

const selectedSort = computed({
    get: () => productStore.selectedSort,
    set: (value: string) => productStore.setSort(value),
});

const filters = computed(() => productStore.filters);

const filteredProducts = computed(() => productStore.filteredProducts);
const filteredProductCount = computed(() => filteredProducts.value.length);

// Filtre Gruplarının Açılıp Kapanmasını Kontrol Eden State
const expandedFilters = ref<{ [key: string]: boolean }>({
    type: true,
    theme: true,
    category: true,
    age: true,
    pieceCount: true,
    special: true,
});

// Ürün türleri ve temalar
const allThemes = ['BrickHeadz', 'Star Wars™'];
const allTypes = ['Setler', 'Kasklar', 'Anahtarlık', 'Ev Dekoru', 'Yetişkinler'];
const allAges = ['4+', '6+', '9+', '13+', '18+'];
const allPieceCounts = [
    { label: '1-99', min: 1, max: 99 },
    { label: '100-249', min: 100, max: 249 },
    { label: '250-499', min: 250, max: 499 },
    { label: '500-999', min: 500, max: 999 },
    { label: '1000-1999', min: 1000, max: 1999 },
    { label: '2000+', min: 2000, max: Infinity },
];
const allSpecials = ['Piyasadan Kaldırılacak Ürünler', 'Son Şans', 'Yeni', 'Zor bulunanlar', 'Özel Ürünler'];
const allCategories = ['Eğlence', 'Fantastik', 'Nasıl yapılacağını öğren', 'Sezonluk'];

// Filtre seçeneklerini döndüren computed özellikler
const productThemes = computed(() => allThemes);
const productTypes = computed(() => allTypes);
const productAges = computed(() => allAges);
const productPieceCounts = computed(() => allPieceCounts);
const productSpecials = computed(() => allSpecials);
const productCategories = computed(() => allCategories);

// Carousel için aktif resim indeksleri
const activeImageIndex = ref<{ [key: number]: number }>({});

// Başlangıçta her ürün için sıfırla
onMounted(() => {
    filteredProducts.value.forEach((product) => {
        activeImageIndex.value[product.id] = 0;
    });
});

// Yeni filtrelenen ürünler geldiğinde aktif resim indekslerini güncelle
watch(filteredProducts, (newProducts) => {
    newProducts.forEach((product) => {
        if (!(product.id in activeImageIndex.value)) {
            activeImageIndex.value[product.id] = 0;
        }
    });
});

// Filtreleri uygula
const applyFilter = (key: 'type' | 'theme' | 'age' | 'pieceCount' | 'special' | 'category', value: string) => {
    productStore.setFilter(key, value);
};

// Carousel fonksiyonları
const prevImage = (productId: number) => {
    const currentIndex = activeImageIndex.value[productId];
    const totalImages = productStore.products.find((product) => product.id === productId)?.images.length || 1;
    activeImageIndex.value[productId] = (currentIndex - 1 + totalImages) % totalImages;
};

const nextImage = (productId: number) => {
    const currentIndex = activeImageIndex.value[productId];
    const totalImages = productStore.products.find((product) => product.id === productId)?.images.length || 1;
    activeImageIndex.value[productId] = (currentIndex + 1) % totalImages;
};

const canGoPrev = (productId: number) => {
    const currentIndex = activeImageIndex.value[productId];
    return currentIndex > 0; 
};

const canGoNext = (productId: number) => {
    const currentIndex = activeImageIndex.value[productId];
    const totalImages = productStore.products.find((product) => product.id === productId)?.images.length || 1;
    return currentIndex < totalImages - 1; 
};

const isSpecialProduct = (product: { special: string }) => {
    return product.special && product.special.length > 0;
};

const toggleFilter = (filterKey: string) => {
    expandedFilters.value[filterKey] = !expandedFilters.value[filterKey];
};

const isFilterExpanded = (filterKey: string) => {
    return expandedFilters.value[filterKey];
};

// Helper function to calculate counts
const getCountsForFilter = (filterKey: string, options: any[]) => {
    return options.reduce((acc, option) => {
        let count = 0;

        if (filterKey === 'pieceCount') {
            // Parça Sayısı için özel sayım
            count = productStore.products.filter(product => {
                // Check if the product's pieceCount falls within the range
                const [min, max] = option.max === Infinity ? [option.min, Infinity] : [option.min, option.max];
                return product.pieceCount !== null && product.pieceCount >= min && product.pieceCount <= max;
            }).filter(product => {
                // Apply other filters except 'pieceCount'
                return Object.keys(filters.value).every((key) => {
                    if (key === 'pieceCount') return true; 
                    if ((filters.value as Record<string, string[]>)[key].length === 0) return true;
                    return (filters.value as Record<string, string[]>)[key].includes((product as Record<string, any>)[key]);
                });
            }).length;
        } else {
            // Diğer filtreler için genel sayım
            count = productStore.products.filter(product => {
                return (product as Record<string, any>)[filterKey] === option.label || (product as Record<string, any>)[filterKey] === option;
            }).filter(product => {
                return Object.keys(filters.value).every(key => {
                    if (key === filterKey) return true; 
                    if ((filters.value as Record<string, any>)[key].length === 0) return true;
                    return (filters.value as Record<string, any>)[key].includes((product as Record<string, any>)[key]);
                });
            }).length;
        }

        acc[option.label || option] = count;
        return acc;
    }, {} as Record<string, number>);
};

const typeCounts = computed(() => getCountsForFilter('type', allTypes));
const themeCounts = computed(() => getCountsForFilter('theme', allThemes));
const categoryCounts = computed(() => getCountsForFilter('category', allCategories));
const ageCounts = computed(() => getCountsForFilter('age', allAges));
const pieceCounts = computed(() => getCountsForFilter('pieceCount', allPieceCounts));
const specialCounts = computed(() => getCountsForFilter('special', allSpecials));

const activeFilters = computed(() => {
    const activeFiltersList: { key: string; label: string }[] = [];
    for (const key in filters.value) {
        if ((filters.value as Record<string, string[]>)[key].length > 0) {
            (filters.value as Record<string, string[]>)[key].forEach((item: string) => {
                activeFiltersList.push({ key, label: item });
            });
        }
    }
    return activeFiltersList;
});

const hasActiveFilters = computed(() => activeFilters.value.length > 0);

const removeFilter = (key: string, value: string): void => {
    const currentFilters = productStore.filters[key as keyof typeof productStore.filters] || [];
    productStore.filters[key as keyof typeof productStore.filters] = currentFilters.filter((item: string) => item !== value);
};

const clearAllFilters = (): void => {
    for (const key in productStore.filters) {
        productStore.filters[key as keyof typeof productStore.filters] = [];
    }
};

/** SEPETE EKLEME YERİ BURASI BURAYA EKLEME YAPICAZ SANIRIM */
// Hover state
const hover = ref(false);

// Quantity state
const quantities = ref<{ [key: number]: number }>({});

const decreaseQuantity = (id: number) => {
  if (quantities.value[id] > 1) {
    quantities.value[id]--;
  }
};

const increaseQuantity = (id: number) => {
  if (!quantities.value[id]) {
    quantities.value[id] = 1;
  }
  quantities.value[id]++;
};

const addToCart = (productId: number) => {
    const quantity = quantities.value[productId] || 1;
};
</script>

<style scoped>
.container {
    display: flex;
    gap: 20px;
    /* Araya boşluk ekle */
    align-items: flex-start;
    margin: 0 auto;
    /* Merkezi hizalama */
    max-width: calc(100% - 354px);
    /* Sağdan ve soldan 350px boşluk */
}

/* Yeni eklenen stil */
.ProductCount-Sorting {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.filters {
    width: 230px;
    margin-top: -15px;
    /* Header ile arasındaki boşluğu kapat */
}

.filter-group {
    margin-top: 0px;
    overflow-x: hidden;

}

.filter-group h3 {
    margin: 0 0 3px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
    cursor: pointer;
}

.filter-group .filter-header {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
}

.filter-options {
    margin-top: 10px;
}

.filter-option {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
}

.filters div {
    margin: 8px 0;
}

.filter-group label {
    margin-left: 8px;
    font-size: 16px;
    color: #555;
}

.products {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(415px, 1fr));
    gap: 0px;
    padding-left: 30px;
    padding-top: 8px;
    margin: 0;

}

.product-card {
    border: 1px solid #ddd;
    overflow: hidden;
    background-color: #fff;
    padding: 20px 10px;
    width: 415px;
    height: 690px; /** BURASINI 580 YAPICAZ SADECE O BUTON GEÇİŞİNİ GÖRMEK İÇİN DURUYO */
    text-align: center;
    box-sizing: border-box;
}

.carousel {
    position: relative;
    width: 390px;
    height: 380px;
    margin: 0 auto;
}

.product-image {
    width: 390px;
    height: 380px;
    object-fit: contain;
    display: block;
    margin: 0 auto;
}

.special-product {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #FFD502;
    color: black;
    display: inline-block;
    padding: 0px 12px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 4px;
    text-align: center;
    white-space: nowrap;
    line-height: 24px;
}

.rotate-90 {
    transform: rotate(-90deg);
}

.rotate-270 {
    transform: rotate(-270deg);
}

.carousel button {
    opacity: 0;
    position: absolute;
    top: 54%;
    background: #f2f2f2;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateY(-50%);
    transition: opacity 0.05s;
}

.carousel:hover button {
    opacity: 1;
}

.carousel-icon-left {
    width: 12px;
    height: 12px;
    margin-left: 2px;
}

.carousel-icon-right {
    width: 12px;
    height: 12px;
    margin-right: 2px;
}

/* Sol buton konumu */
.carousel .prev-button {
    left: 10px;
}

/* Sağ buton konumu */
.carousel .next-button {
    right: 10px;
}

.bars {
    margin-top: 10px;
    margin-left: 0px;
    width: 100%;
    height: 4px;
}

.bar-a {
    background: linear-gradient(to right, #999999 50%, #f0f0f0 50%);
}

.bar-b {
    background: linear-gradient(to right, #f0f0f0 50%, #999999 50%);
}

.product-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
}

.product-info ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
}

.product-info li {
    display: flex;
    align-items: center;
    padding: 0px 0px 0px 0px;
}

.age {
    font-size: 14px;
    margin: 0 12px 0 0;
}

.age-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 1px;
    margin-top: 2px;
}

.piece-icon {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    margin-right: 1px;
    margin-top: 2px;
}

.product-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10px;
    font-size: 13px;
    font-weight: bold;
    color: #333;
}

.bosluk {
    height: 100px;
}

.toggle-icon {
    width: 16px;
    height: 16px;
    object-fit: contain;
    margin-top: 5px;
    transition: transform 0.3s;
}

.rotated {
    transform: rotate(180deg);
}

.filter-option input[type="checkbox"] {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    /* Adjust border thickness */
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: white;
    cursor: pointer;
    position: relative;
}

.filter-option input[type="checkbox"]:hover {
    border-color: black;
}

.filter-option input[type="checkbox"]:checked::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 9px;
    width: 6px;
    height: 14px;
    border: solid black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.clear-filters {
    margin-bottom: 10px;
}

.clear-button {
    border-radius: 24px;
    padding: 6px 8px;
    line-height: 21px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    background-color: black;
    color: white;
}

/* Seçilen Filtreler */
.selected-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
}

.sorting-options {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
}

.sorting-options label {
    margin-right: 10px;
    font-size: 16px;
    color: #333;
}

.sorting-options select {
    padding: 5px;
    font-size: 16px;
}

.filter-tag {
    border: 2px solid #d3d3d3;
    border-radius: 24px;
    padding: 6px 10px;
    line-height: 20px;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    background-color: transparent;
}

.close-icon {
    font-size: 18px;
    margin-left: 6px;
    margin-top: -2px;
    font-weight: bold;
}

quantity-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

.quantity-controls button {
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
}

.quantity-controls span {
    margin: 0 10px;
    font-size: 16px;
}

.add-to-cart-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}

/* Add to Cart Button */
.add-to-cart-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    margin-left: 10px;
    border-radius: 4px;
    display: inline-flex;
    align-items: center;
}

.add-to-cart-button:hover {
    background-color: #0056b3;
}

/* Product Price */
.product-price {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    text-align: center;
}
</style>