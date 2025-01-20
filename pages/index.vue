<template>
  <div>
    <Navbar />
    <HeroSection />
    <Carousel />
    
    <div class="product-grid">
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" class="product-image" :alt="product.name" />
        <div class="product-content">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <a href="#" class="btn btn-link">Daha fazla bilgi ➤</a>
        </div>
      </div>
    </div>
    <Newsletter />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import HeroSection from '~/components/HeroSection.vue';
import Carousel from '~/components/Carousel.vue';
import CategoryList from '~/components/CategoryList.vue';
import Newsletter from '~/components/Newsletter.vue';

export default {
  components: {
    Navbar,
    Footer,
    HeroSection,
    Carousel,
    CategoryList,
    Newsletter,
  },
  data() {
    return {
      products: [
        { id: 1, name: 'Yeni Ortaçağ Kasabası Meydanı', description: 'Sevilen eski bir seti temel alan yeni bir setle zamanda yolculuk yap.', image: 'https://www.lego.com/cdn/cs/set/assets/blt0ac7827aca1f4813/10332-Homepage-202403-Block-Standard-2.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5' },
        { id: 2, name: 'Yeni Kırmızı Londra Telefon Kulübesi', description: 'Hayranlardan ilham alan yeni setle bir kültür simgesini hayata taşı.', image: 'https://www.lego.com/cdn/cs/set/assets/blt26c12739cd48c4d2/21347-Exclusive-2402-SL-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5' },
        { id: 3, name: 'Yeni LEGO® Titanik', description: '20. yüzyılın başyapıtını olağanüstü ayrıntılar ve ölçekle hayata döndür.', image: 'https://www.lego.com/cdn/cs/set/assets/bltffbdd2e2579ca180/04-10294-Ice-Homepage--202110--Block-Standard-Product.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5' },
      ],
    };
  },
};
</script>

<style scoped>
.product-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px auto;
  max-width: 1200px;
}

.product-card {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.product-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.product-content {
  padding: 15px;
}

.product-content h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-content p {
  font-size: 14px;
  color: #666666;
  margin-bottom: 15px;
}

.product-content .btn-link {
  font-weight: bold;
  text-decoration: none;
  color: #d40000;
  font-size: 14px;
}

.product-content .btn-link:hover {
  color: #ff0000;
}
</style>
