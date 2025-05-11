<template>
  <div v-if="product" class="product-page">
    <nav class="breadcrumbs">
      <router-link to="/">Главная</router-link> /
      <router-link :to="`/catalog`">Каталог</router-link> /
      <span>{{ product.name }}</span>
    </nav>

    <div class="product-container">
      <div class="product-gallery">
        <img :src="product.image" :alt="product.name" class="main-image" />
      </div>

      <div class="product-info">
        <h1 class="product-title">{{ product.name }}</h1>
        <div class="price-container">
          <span class="price">{{ product.price }} ₽</span>
          <span v-if="product.oldPrice" class="old-price"
            >{{ product.oldPrice }} ₽</span
          >
        </div>

        <div class="rating-container" v-if="productReviews.length > 0">
          <div class="average-rating">
            <span class="rating-value">{{ averageRating }}</span>
            <div class="stars">
              <span
                v-for="n in 5"
                :key="n"
                :class="{ filled: n <= Math.round(averageRating) }"
              >
                ★
              </span>
            </div>
            <span class="reviews-count"
              >({{ productReviews.length }} отзывов)</span
            >
          </div>
        </div>

        <div class="product-meta">
          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24">
              <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.75 16.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm3.49-6.68c-.44.21-.83.48-1.15.8-.32.32-.59.71-.8 1.15-.13.28-.19.59-.19.93h-1.51c0-.58.1-1.12.31-1.62.2-.5.5-.94.88-1.32s.82-.67 1.32-.88c.5-.21 1.04-.31 1.62-.31.58 0 1.12.1 1.62.31.5.21.94.5 1.32.88.39.39.67.82.88 1.32.21.5.31 1.04.31 1.62h-1.51c0-.34-.06-.65-.19-.93s-.3-.58-.54-.83c-.24-.25-.53-.45-.87-.59-.36-.15-.74-.22-1.15-.22-.41 0-.79.07-1.15.22z"
              />
            </svg>
            Категория: {{ product.category }}
          </div>
          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24">
              <path
                d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z"
              />
              <path
                d="M12 17c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1zm-1-8h2v2h-2z"
              />
            </svg>
            Цвет: {{ product.color }}
          </div>
        </div>

        <p class="product-description">{{ product.description }}</p>

        <div class="product-actions">
          <button
            @click="handleAddToCart(product)"
            class="add-to-cart-btn"
            :disabled="auth.currentUser === null"
            :class="{ 'added-to-cart': addedItems.includes(product.id) }"
          >
            <svg class="cart-icon" viewBox="0 0 24 24">
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
            Добавить в корзину
          </button>

          <button
            @click="toggleFavorite(product)"
            class="favorite-btn"
            :class="{ 'is-favorite': favoriteIds.includes(product.id) }"
          >
            <svg class="heart-icon" viewBox="0 0 24 24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <section class="reviews-section">
      <div class="reviews-header">
        <h2>Отзывы</h2>
        <button
          v-if="auth.currentUser"
          @click="showReviewForm = !showReviewForm"
          class="add-review-btn"
        >
          Написать отзыв
        </button>
      </div>

      <form
        v-if="showReviewForm"
        @submit.prevent="submitReview"
        class="review-form"
      >
        <div class="rating-select">
          <span>Оценка:</span>
          <div class="stars">
            <button
              v-for="n in 5"
              :key="n"
              type="button"
              @click="newReview.rating = n"
              :class="{ active: newReview.rating >= n }"
            >
              ★
            </button>
          </div>
        </div>
        <textarea
          v-model="newReview.text"
          placeholder="Ваш отзыв..."
          required
        ></textarea>
        <button type="submit" class="submit-review-btn">Отправить</button>
      </form>

      <div v-if="productReviews.length === 0" class="no-reviews">
        <p>Пока нет отзывов. Будьте первым!</p>
      </div>

      <div v-else class="reviews-list">
        <div
          v-for="review in productReviews"
          :key="review.id"
          class="review-card"
        >
          <div class="review-header">
            <div class="user-avatar">
              {{ review.author[0] }}
            </div>
            <div class="user-info">
              <h3>{{ review.author }}</h3>
              <div class="rating">
                <span
                  v-for="n in 5"
                  :key="n"
                  :class="{ filled: n <= review.rating }"
                >
                  ★
                </span>
              </div>
            </div>
          </div>
          <p class="review-text">{{ review.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";
import { addToCart } from "@/cart";
import { addToFavorites, removeFromFavorites } from "@/favorites";
import { auth } from "@/auth";

const route = useRoute();
const router = useRouter();
const product = ref(null);
const showReviewForm = ref(false);
const newReview = ref({ rating: 0, text: "" });

onMounted(() => {
  const id = parseInt(route.params.id);
  product.value = products.find((p) => p.id === id);
  if (!product.value) {
    alert("Товар не найден");
    router.push("/");
  }

  if (auth.currentUser) {
    const favorites = JSON.parse(
      localStorage.getItem(`favorites-${auth.currentUser.email}`) || "[]"
    );
    favoriteIds.value = favorites.map((p) => p.id);
  }
});

const averageRating = computed(() => {
  if (productReviews.value.length === 0) return 0;

  const sum = productReviews.value.reduce((total, review) => {
    return total + review.rating;
  }, 0);

  return (sum / productReviews.value.length).toFixed(1);
});

const favoriteIds = ref([]);

onMounted(() => {
  if (auth.currentUser) {
    const favorites = JSON.parse(
      localStorage.getItem(`favorites-${auth.currentUser.email}`) || "[]"
    );
    favoriteIds.value = favorites.map((p) => p.id);
  }
});

const addedItems = ref([]);

function handleAddToCart(product) {
  addToCart(product);
  addedItems.value.push(product.id);

  setTimeout(() => {
    const index = addedItems.value.indexOf(product.id);
    if (index !== -1) {
      addedItems.value.splice(index, 1);
    }
  }, 400);
}

function toggleFavorite(product) {
  if (!auth.currentUser) {
    alert("Авторизуйтесь, чтобы использовать избранное");
    return;
  }

  const index = favoriteIds.value.indexOf(product.id);
  if (index === -1) {
    addToFavorites(product);
    favoriteIds.value.push(product.id);
  } else {
    removeFromFavorites(product.id);
    favoriteIds.value.splice(index, 1);
  }
}

const productReviews = computed(() =>
  reviews.filter((r) => r.productId === product.value?.id)
);

function submitReview() {
  reviews.push({
    id: Date.now(),
    productId: product.value.id,
    author: auth.currentUser?.email || "Аноним",
    rating: newReview.value.rating,
    text: newReview.value.text,
    date: new Date().toISOString(),
  });
  newReview.value = { rating: 0, text: "" };
  showReviewForm.value = false;
}
</script>

<style scoped>
.product-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.breadcrumbs {
  margin-bottom: 2rem;
  color: #7f8c8d;
}

.breadcrumbs a {
  color: var(--green-primary);
  text-decoration: none;
}

.product-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.product-gallery {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.main-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.product-info {
  padding: 1rem;
}

.product-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.price {
  font-size: 1.8rem;
  color: var(--green-primary);
  font-weight: bold;
}

.old-price {
  font-size: 1.2rem;
  color: #95a5a6;
  text-decoration: line-through;
}

.product-meta {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7f8c8d;
}

.meta-icon {
  width: 20px;
  height: 20px;
  fill: currentColor;
}

.product-description {
  color: #7f8c8d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.product-actions {
  display: flex;
  gap: 1rem;
}

.add-to-cart-btn {
  flex: 1;
  padding: 1rem;
  background: var(--green-primary);
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: var(--green-dark);
}

.cart-icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

.favorite-btn {
  width: 48px;
  background: none;
  border: 2px solid var(--green-primary);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.favorite-btn.is-favorite {
  background: var(--green-primary);
}

.heart-icon {
  width: 24px;
  height: 24px;
  fill: var(--green-primary);
  transition: fill 0.3s ease;
}

.favorite-btn.is-favorite .heart-icon {
  fill: white;
}

.reviews-section {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.reviews-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.add-review-btn {
  padding: 0.5rem 1rem;
  background: var(--green-primary);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.review-form {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.rating-select {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.stars button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #e0e0e0;
  cursor: pointer;
  padding: 0 0.2rem;
  transition: all 0.3s ease;
}

.stars button.active {
  color: #ffd700;
}

textarea {
  width: 100%;
  height: 100px;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  margin-bottom: 1rem;
  resize: vertical;
}

.submit-review-btn {
  background: var(--green-primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.review-card {
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--green-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.rating span {
  color: #e0e0e0;
}

.rating .filled {
  color: #ffd700;
}

.rating-container {
  margin-bottom: 1.5rem;
}

.average-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.rating-value {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c3e50;
}

.stars {
  display: flex;
}

.stars span {
  color: #e0e0e0;
  font-size: 1.2rem;
}

.stars .filled {
  color: #ffd700;
}

.reviews-count {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.added-to-cart .cart-icon {
  opacity: 0;
  transform: scale(0.5);
}

.added-to-cart .check-icon {
  opacity: 1;
  transform: scale(1);
  animation: bounce 0.5s;
}

@keyframes bounce {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.added-to-cart {
  animation: pulse 0.5s;
  background: var(--green-dark);
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .product-container {
    grid-template-columns: 1fr;
  }

  .main-image {
    height: 300px;
  }

  .product-actions {
    flex-direction: column;
  }
}
</style>
