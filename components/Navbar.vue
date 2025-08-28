<template>
  <div class="navbar-container" @click="closeCategories">
    <div class="top-space"></div>
    <nav class="navbar lego-navbar">
      <div class="container d-flex align-items-center">
        <!-- Sol buton -->
        <button class="category-button" @click.stop="toggleCategories">
          ☰
        </button>

        <!-- Sol logo -->
        <div class="navbar-logo">
          <img src="/public/brand-lego.svg" alt="LEGO Logo" class="logo-img" />
        </div>

        <!-- Orta menü -->
        <ul class="navbar-menu d-flex list-unstyled mb-0 flex-grow-1">
          <li class="nav-item">
            <a href="/urunler" class="nav-link">ÜRÜNLER</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">KEŞİF</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">YARDIM</a>
          </li>
          <li class="nav-item">
            <button href="#" class="nav-link">YENİ YIL</button>
          </li>
        </ul>

        <!-- Sağ alan -->
        <div class="navbar-right d-flex align-items-center">
          <!-- Arama kısımı -->
          <form class="search-bar d-flex align-items-center">
            <input
              type="text"
              class="form-control"
              placeholder="Ara..."
              aria-label="Search"
            />
            <button type="submit" class="btn search-icon-btn">
              <i class="bi bi-search"></i>
            </button>
          </form>
          <!-- Sağdaki ikonlar -->
          <i class="bi bi-heart ms-3"></i>
          <!-- Sepet simgesi -->
          <i class="bi bi-cart ms-3 cart-icon" @click="navigateToCart"></i>
        </div>
      </div>
    </nav>

    <!-- Kategori listesi -->
    <div v-if="categoriesVisible" class="category-list">
      <CategoryList />
    </div>
  </div>
</template>

<script>
import CategoryList from "~/components/CategoryList.vue";

export default {
  components: {
    CategoryList,
  },
  data() {
    return {
      categoriesVisible: false,
    };
  },
  methods: {
    toggleCategories() {
      this.categoriesVisible = !this.categoriesVisible;
    },
    closeCategories() {
      this.categoriesVisible = false;
    },
    navigateToCart() {
      // Vue Router ile '/cart' sayfasına yönlendirme
      this.$router.push("/cart");
    },
  },
};
</script>

<style scoped>
/* Genel Navbar ayarları */
.navbar-container {
  background-color: #ffffff;
  padding-top: 0px;
  position: relative;
}

.top-space {
  height: 15px;
  background-color: #ffffff;
}

.lego-navbar {
  background-color: #ffd502;
  height: 64px;
  border-bottom: 2px solid #ffffff;
  display: flex;
  align-items: center;
}

.navbar-logo {
  margin-right: 60px;
}

.navbar-logo .logo-img {
  height: 40px;
}

/* Menü */
.navbar-menu {
  gap: 30px;
}

.navbar-menu .nav-link {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 16px;
}

.navbar-menu .nav-link:hover {
  color: #d40000;
}

/* Sağ alan */
.navbar-right {
  gap: 15px;
}

.search-bar {
  max-width: 300px;
}

.search-bar .form-control {
  height: 30px;
  border-radius: 15px;
}

.search-icon-btn {
  border: none;
  background: none;
  color: #000;
  font-size: 20px;
  margin-left: 5px;
  cursor: pointer;
}

.search-icon-btn:hover {
  color: #d40000;
}

/* Sepet simgesi */
.cart-icon {
  font-size: 24px;
  cursor: pointer;
}

.cart-icon:hover {
  color: #d40000;
}

/* Kategori butonu */
.category-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
}

/* Kategori listesi */
.category-list {
  position: absolute;
  top: 64px;
  left: 0;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  width: 250px;
  z-index: 1000;
}
</style>
