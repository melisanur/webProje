<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="category in categories" :key="category">
      <button @click="handleCategoryClick(category)">
        {{ category }}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      categories: ["Cars", "Spaceships", "Castles", "City", "Technic"],
    };
  },
  methods: {
    handleCategoryClick(category) {
      console.log(`Clicked on: ${category}`);
    },
  },
};
</script>

<style scoped>
.list-group {
  padding: 0;
  margin: 0;
}

.list-group-item {
  margin-bottom: 10px;
}

.list-group-item button {
  width: 100%;
  background: #f7f7f7;
  border: none;
  text-align: left;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
}

.list-group-item button:hover {
  background: #d40000;
  color: #ffffff;
}
</style>
