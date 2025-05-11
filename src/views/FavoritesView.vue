<script setup>
import { ref, computed } from "vue";
import { auth } from "@/auth";
import { getFavorites, removeFromFavorites, clearFavorites } from "@/favorites";

const favorites = ref(auth.currentUser ? getFavorites() : []);

const isEmpty = computed(() => favorites.value.length === 0);

function handleRemove(productId) {
  removeFromFavorites(productId);
  favorites.value = getFavorites(); 
}

function emptyFavorite() {
  clearFavorites()
  favorites.value = []
}

const base = import.meta.env.BASE_URL
</script>

<template>
  <section class="favorites-container">
    <div class="favorites-header">
      <h1 class="favorites-title">Избранное</h1>
      <p v-if="!isEmpty" class="favorites-count">
        {{ favorites.length }} товаров
      </p>
    </div>

    <div v-if="!auth.currentUser" class="auth-required">
      <div class="auth-message">
        <svg class="lock-icon" viewBox="0 0 24 24">
          <path
            d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6z"
          />
        </svg>
        <h2>Доступ только для авторизованных пользователей</h2>
        <p>
          Войдите или зарегистрируйтесь, чтобы просматривать избранные товары
        </p>
        <div class="auth-actions">
          <router-link to="/login" class="auth-btn">Войти</router-link>
          <router-link to="/register" class="auth-btn outline"
            >Регистрация</router-link
          >
        </div>
      </div>
    </div>

    <div v-else-if="isEmpty" class="empty-favorites">
      <img :src="base + '/heart.svg'" class="empty-image" alt="Пусто" />
      <p>Вы пока ничего не добавили в избранное</p>
      <router-link to="/catalog" class="continue-shopping-btn">
        Перейти к покупкам →
      </router-link>
    </div>

    <div v-else class="favorites-grid">
      <div v-for="product in favorites" :key="product.id" class="favorite-item">
        <router-link :to="`/product/${product.id}`" class="product-link">
          <div class="image-wrapper">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
          </div>
          <h2 class="product-title">{{ product.name }}</h2>
          <p class="product-price">{{ product.price }} ₽</p>
        </router-link>
        <button @click="handleRemove(product.id)" class="remove-btn">
          <svg class="trash-icon" viewBox="0 0 24 24">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </button>
      </div>
    </div>
    <button v-if="favorites.length != 0" @click="emptyFavorite" class="clear-favorites-btn">
      Очистить избранное
    </button>
  </section>
</template>

<style scoped>
.favorites-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.favorites-header {
  margin-bottom: 2rem;
  text-align: center;
}

.favorites-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.favorites-count {
  color: #7f8c8d;
  font-size: 1.1rem;
}

.auth-required {
  text-align: center;
  padding: 4rem 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.auth-message {
  max-width: 500px;
  margin: 0 auto;
}

.lock-icon {
  width: 64px;
  height: 64px;
  fill: #2c3e50;
  margin-bottom: 1.5rem;
}

.auth-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
}

.auth-btn {
  padding: 0.8rem 1.5rem;
  background: var(--green-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.auth-btn.outline {
  background: none;
  border: 2px solid var(--green-primary);
  color: var(--green-primary);
}

.auth-btn:hover {
  transform: translateY(-2px);
}

.empty-favorites {
  text-align: center;
  padding: 4rem 1rem;
}

.empty-image {
  width: 200px;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.browse-btn {
  display: inline-block;
  margin-top: 1rem;
  color: var(--green-primary);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.browse-btn:hover {
  transform: translateX(5px);
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}

.favorite-item {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.favorite-item:hover {
  transform: translateY(-5px);
}

.product-link {
  text-decoration: none;
  color: inherit;
}

.image-wrapper {
  width: 100%;
  height: 200px;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.favorite-item:hover .product-image {
  transform: scale(1.05);
}

.product-title {
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.product-price {
  color: var(--green-primary);
  font-weight: bold;
  font-size: 1.2rem;
}

.remove-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.trash-icon {
  width: 24px;
  height: 24px;
  fill: #e74c3c;
  transition: fill 0.3s ease;
}

.remove-btn:hover .trash-icon {
  fill: #c0392b;
}

.clear-favorites-btn {
  margin-top: 30px;
  padding: 0.8rem 1.5rem;
  background: none;
  border: 2px solid #e74c3c;
  color: #e74c3c;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-favorites-btn:hover {
  background: #e74c3c;
  color: white;
}

.continue-shopping-btn {
  display: inline-block;
  padding: 0.8rem 1.5rem;
  background: var(--green-primary);
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.continue-shopping-btn:hover {
  background: var(--green-dark);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .favorites-title {
    font-size: 2rem;
  }

  .auth-actions {
    flex-direction: column;
  }

  .auth-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
