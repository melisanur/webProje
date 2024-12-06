<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button
        v-for="(item, index) in carouselItems"
        :key="index"
        :data-bs-target="'#carouselExampleIndicators'"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
      ></button>
    </div>

    <!-- Carousel içerik -->
    <div class="carousel-inner">
      <div
        v-for="(item, index) in carouselItems"
        :key="index"
        :class="['carousel-item', { active: index === 0 }]"
      >
      
        <img :src="item.image" class="d-block w-100 carousel-image" :alt="item.title" />

        <!-- Ürün bilgileri -->
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ item.title }}</h5>
          <p>{{ item.description }}</p>
          <a href="#" class="btn btn-danger">Daha fazla bilgi ➤</a>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    // Carousel işlevlerini client tarafında çalıştıran kısım
    if (process.client) {
      import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(() => {
          console.log('Bootstrap JS loaded successfully.');
        })
        .catch((error) => {
          console.error('Failed to load Bootstrap JS:', error);
        });
    }
  },
  data() {
    return {
      carouselItems: [
        {
          image: "https://www.lego.com/cdn/cs/set/assets/blt83f810945862ba6d/76781-Home-202410-Home-P-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
          title: "Wednesday ve Enid'in Yurt Odası",
          description: "Herkesin en sevdiği zıt kutup oda arkadaşlarıyla birlikte takıl!",
        },
        {
          image: "https://www.lego.com/cdn/cs/set/assets/blt4c2c43152a2e0f0f/Wicked-75682-HT-202410-Block-Standard.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
          title: "Büyüleyici bir ikili",
          description: "Yeni LEGO® Wicked setleriyle filmdeki büyülü anları yeniden yarat.",
        },
        {
          image: "https://www.lego.com/cdn/cs/set/assets/bltc2bc74ae26502654/1984-Homepage-202409-Block-Standard-75684.jpg?fit=crop&format=webply&quality=80&width=635&height=440&dpr=1.5",
          title: "Emerald City'ye Hoş Geldiniz",
          description: "Wicked filminden ilham alan yepyeni LEGO® setleri karşınızda",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-item {
  position: relative;
}

.carousel-image {
  max-height: 400px;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.carousel-caption h5 {
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

.carousel-caption p {
  font-size: 16px;
  color: #ffffff;
}

.carousel-caption .btn {
  margin-top: 10px;
  font-size: 14px;
  color: #ffffff;
}
</style>
