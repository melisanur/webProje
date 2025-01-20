<template>
  <div class="cart-page">
    <h1 class="cart-title">🛒 Sepetim</h1>

    <div v-if="cartItems.length > 0" class="cart-container">
      <!-- Sepet Ürünleri -->
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" :alt="item.name" class="item-image" />
        <div class="item-details">
          <h3 class="item-name">{{ item.name }}</h3>
          <p class="item-quantity">Adet: <strong>{{ item.quantity }}</strong></p>
          <p class="item-price">Fiyat: <strong>{{ formatPrice(item.price) }}</strong></p>
        </div>
        <button @click="removeFromCart(item.id)" class="remove-item">
          Kaldır
        </button>
      </div>

      <!-- Toplam Fiyat ve İşlem Düğmeleri -->
      <div class="cart-footer">
        <p class="total-price">Toplam Fiyat: {{ formatPrice(cartTotalPrice) }}</p>
        <button class="checkout-button">Satın Al</button>
      </div>
    </div>

    <!-- Boş Sepet -->
    <div v-else class="empty-cart">
      <img src="/public/empty-cart.svg" alt="Boş Sepet" class="empty-cart-image" />
      <p class="empty-cart-text">Sepetiniz şu anda boş. Hadi alışverişe başlayın! 😊</p>
      <button @click="navigateToProducts" class="go-to-products">
        Ürünlere Göz At
      </button>
    </div>
  </div>
</template>

<script>
import { getDatabase, ref, onValue, remove } from "firebase/database";

export default {
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    cartTotalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
  methods: {
    formatPrice(price) {
      return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
      }).format(price);
    },
    fetchCartItems() {
      const db = getDatabase();
      const cartRef = ref(db, "cart/");

      onValue(cartRef, (snapshot) => {
        const data = snapshot.val();
        this.cartItems = data ? Object.values(data) : [];
      });
    },
    removeFromCart(itemId) {
      const db = getDatabase();
      const itemRef = ref(db, `cart/${itemId}`);
      remove(itemRef);
    },
    navigateToProducts() {
      this.$router.push("/urunler"); // Ürünler sayfasına yönlendirme
    },
  },
  mounted() {
    this.fetchCartItems();
  },
};
</script>

<style scoped>
/* Sayfa genel stili */
.cart-page {
  padding: 30px;
  background-color: #f4f4f4;
  min-height: 100vh;
}

/* Başlık */
.cart-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #d40000;
  text-align: center;
  margin-bottom: 30px;
}

/* Sepet konteyneri */
.cart-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Sepet Ürünü */
.cart-item {
  display: flex;
  align-items: center;
  background-color: #ffd502;
  border: 2px solid #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.item-image {
  max-width: 100px;
  height: auto;
  margin-right: 20px;
  border-radius: 5px;
  border: 2px solid #fff;
}

.item-details {
  flex-grow: 1;
}

.item-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
}

.item-quantity,
.item-price {
  margin-top: 5px;
  font-size: 1rem;
  color: #555;
}

.remove-item {
  background: #d40000;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.remove-item:hover {
  background: #ff0000;
  transform: scale(1.05);
}

/* Sepet Alt Kısmı */
.cart-footer {
  text-align: center;
  margin-top: 30px;
}

.total-price {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.checkout-button {
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 15px 25px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-button:hover {
  background-color: #218838;
  transform: scale(1.05);
}

/* Boş Sepet */
.empty-cart {
  text-align: center;
  margin-top: 50px;
}

.empty-cart-image {
  max-width: 200px;
  margin-bottom: 20px;
}

.empty-cart-text {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
}

.go-to-products {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.go-to-products:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}
</style>