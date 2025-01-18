import { defineStore } from 'pinia';

// 1. Define TypeScript Interfaces for Strong Typing
interface Product {
  id: number;
  name: string;
  description: string;
  images: string[];
  age: string;
  pieceCount: number | null;
  type: string;
  theme: string;
  category: string;
  special: string;
  price: number;
}

interface Filters {
  type: string[];
  theme: string[];
  age: string[];
  pieceCount: string[];
  special: string[];
  category: string[];
}

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Venator Sınıfı Cumhuriyet Saldırı Kruvazörü',
        description: 'Yetişkinler için bir set.',
        images: ['/starWars/vscsk/a.webp', '/starWars/vscsk/b.webp'],
        age: '18+',
        pieceCount: 5374,
        type: 'Yetişkinler',
        theme: 'Star Wars™',
        category: 'Nasıl yapılacağını öğren',
        special: 'Özel Ürünler',
        price: 26999.00,
      },
      {
        id: 2,
        name: 'Obi-Wan Kenobi’nin Jedi Starfighter™’ı',
        description: 'Çocuklar için eğlenceli bir set.',
        images: ['/starWars/owkjs/a.webp', '/starWars/owkjs/b.webp'], 
        age: '6+',
        pieceCount: 282,
        type: 'Setler',
        theme: 'Star Wars™',
        category: 'Eğlence',
        special: '',
        price: 1499.00,
      },
      {
        id: 3,
        name: "Ahsoka Tano'nun T-6 Jedi Mekiği",
        description: 'Fantastik bir Star Wars seti.',
        images: ['/starWars/AhsokaT-6JediMekiği/a.webp', '/starWars/AhsokaT-6JediMekiği/b.webp'],
        age: '9+',
        pieceCount: 601,
        type: 'Setler',
        theme: 'Star Wars™',
        category: 'Fantastik',
        special: '',
        price: 2999.00,
      },
      {
        id: 4,
        name: "Klon Komutanı Cody™ Kaskı",
        description: 'LEGO Star Wars koleksiyoncuları için bir model.',
        images: ['/starWars/kkck/a.webp', '/starWars/kkck/b.webp'],
        age: '18+',
        pieceCount: 766,
        type: 'Kasklar',
        theme: 'Star Wars™',
        category: 'Fantastik',
        special: 'Zor Bulunanlar',
        price: 2899.00,
      },
      {
        id: 5,
        name: "Darth Vader™ Anahtarlık",
        description: "LEGO Darth Vader figürü ile tasarlanmış anahtarlık.",
        images: ["/starWars/darthVader/a.webp", "/starWars/darthVader/b.webp"],
        age: "6+",
        pieceCount: null, // Parça sayısı yok.
        type: "Anahtarlık",
        theme: "Star Wars™",
        category: "Sezonluk",
        special: '', // Özel bir durumu yok.
        price:199.00,
      },
      {
        id: 6,
        name: "C-3PO",
        description: "LEGO C-3PO figürü.",
        images: ["/starWars/C3PO/a.webp", "/starWars/C3PO/b.webp"],
        age: "6+",
        pieceCount: 20,
        type: "Ev Dekoru",
        theme: "Star Wars™",
        category: "Nasıl yapılacağını öğren",
        special: 'Özel Ürünler',
        price: 5799.00,
      },
      {
        id: 7,
        name: "İmparatorluk Yıldız Destroyeri",
        description: "LEGO İmparatorluk Yıldız Destroyeri seti.",
        images: ["/starWars/iyd/a.webp", "/starWars/iyd/b.webp"],
        age: "14+",
        pieceCount: 1441,
        type: "Setler",
        theme: "Star Wars™",
        category: "Eğlence",
        special: '',
        price: 6999.00,
      },
      {
        id: 8,
        name: "Cocuk Yoda",
        description: "Çocuk Yoda figürü.",
        images: ["/starWars/cocuk/a.webp", "/starWars/cocuk/b.webp"],
        age: "10+",
        pieceCount: 1073,
        type: "Yetişkinler",
        theme: "Star Wars™",
        category: "Fantastik",
        special: '',
        price: 3999.00,
      },
      {
        id: 9,
        name: "Luke Skywalker'ın Kara Motoru",
        description: "Luke Skywalker'ın hızlı motoru.",
        images: ["/starWars/sky/a.webp", "/starWars/sky/b.webp"],
        age: "18+",
        pieceCount: 1890,
        type: "Yetişkinler",
        theme: "Star Wars™",
        category: "Fantastik",
        special: 'Piyasadan Kaldırılacak Ürünler',
        price: 9999.00,
      },
    ] as Product[],
    filters: {
      type: [],      // Çoklu seçim için dizi
      theme: [],
      age: [],
      pieceCount: [],
      special: [],
      category: [],
    } as Filters,
    selectedSort: 'recommended', // Varsayılan sıralama
  }),
  
  getters: {
    filteredProducts: (state): Product[] => {
      const filtered = state.products.filter((product: Product) => {
        const typeMatch = state.filters.type.length > 0 ? state.filters.type.includes(product.type) : true;
        const themeMatch = state.filters.theme.length > 0 ? state.filters.theme.includes(product.theme) : true;
        const ageMatch = state.filters.age.length > 0 ? state.filters.age.includes(product.age) : true;

        const pieceCountMatch = state.filters.pieceCount.length > 0
          ? state.filters.pieceCount.some(pc => {
              if (pc.includes('2000+')) {
                return product.pieceCount !== null && product.pieceCount > 2000;
              } else {
                const [min, max] = pc.split('-').map(Number);
                return product.pieceCount !== null &&
                  (max ? product.pieceCount >= min && product.pieceCount <= max : product.pieceCount >= min);
              }
            })
          : true;

        const specialMatch = state.filters.special.length > 0 ? state.filters.special.includes(product.special) : true;
        const categoryMatch = state.filters.category.length > 0 ? state.filters.category.includes(product.category) : true;

        return typeMatch && themeMatch && ageMatch && pieceCountMatch && specialMatch && categoryMatch;
      });

      const sorted = [...filtered];
      switch (state.selectedSort) {
        case 'recommended':
          sorted.sort((a, b) => b.id - a.id);
          break;
        case 'newest':
          sorted.sort((a, b) => a.id - b.id);
          break;
        case 'pieceCount':
          sorted.sort((a, b) => (b.pieceCount || 0) - (a.pieceCount || 0));
          break;
        case 'alphabetical':
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        default:
          break;
      }

      return sorted;
    },
  },

  actions: {
    setFilter(key: 'type' | 'theme' | 'age' | 'pieceCount' | 'special' | 'category', value: string) {
      const idx = this.filters[key].indexOf(value);
      if (idx >= 0) {
        this.filters[key].splice(idx, 1);
      } else {
        this.filters[key].push(value);
      }
    },
    setSort(sortValue: string) {
      this.selectedSort = sortValue;
    },
  },
});