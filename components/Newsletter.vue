<template>
  <div class="newsletter-container">
    <h3 class="newsletter-title">Bültenimize Katılın</h3>
    <p class="newsletter-description">
      En yeni LEGO setlerinden ve özel fırsatlardan haberdar olmak için bültenimize abone olun!
    </p>
    <form @submit.prevent="handleSubmit" class="newsletter-form">
      <input
        type="email"
        v-model="email"
        class="newsletter-input"
        placeholder="E-posta adresiniz"
        required
      />
      <button type="submit" class="btn btn-danger newsletter-button">Abone Ol</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
    };
  },
  methods: {
    handleSubmit() {
      if (this.email) {
        console.log(`E-posta adresi alındı: ${this.email}`);
        alert('Bültenimize abone olduğunuz için teşekkür ederiz!');
        this.email = '';
      }
    },
  },
};
</script>

<style scoped>
.newsletter-container {
  background-color: #ffee33;
  padding: 40px 20px;
  text-align: center;
  margin: 40px auto;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
}

.newsletter-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333333;
}

.newsletter-description {
  font-size: 16px;
  margin-bottom: 25px;
  color: #666666;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.newsletter-input {
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  width: 70%;
  max-width: 300px;
  font-size: 16px;
}

.newsletter-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  background-color: #d40000;
  color: #ffffff;
}

.newsletter-button:hover {
  background-color: #ff0000;
}
</style>
