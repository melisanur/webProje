<template>
  <section class="hero-section container text-center">
    <div class="theme-list d-flex flex-wrap justify-content-center">
      <div
        class="theme-item d-flex flex-column align-items-center"
        v-for="(theme, index) in themes"
        :key="index"
      >
        <img :src="theme.image" :alt="theme.title" class="theme-image" />
        <p class="theme-title">{{ theme.title }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        {
          image: "/StarWarsHeroComp.png",
          title: "Star Wars™",
        },
        {
          image: "/CityHeroComp.png",
          title: "City",
        },
        {
          image: "/CreatorHeroComp.png",
          title: "Creator 3in1",
        },
        {
          image: "/HarryPotterHeroComp.png",
          title: "Harry Potter™",
        },
        {
          image: "/FriendsHeroComp.png",
          title: "Friends",
        },
        {
          image: "/LegoIconsHeroComp.png",
          title: "LEGO® Icons",
        },
      ],
    };
  },
};
</script>

<style scoped>
.hero-section {
  margin-top: 20px;
  padding: 20px 0;
}

.theme-list {
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.theme-item {
  margin: 10px;
  text-align: center;
}

.theme-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.theme-title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
}
</style>
