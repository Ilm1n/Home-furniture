<script setup>
import { ref, computed, onMounted } from "vue";
import { products } from "@/data/products";
import { getCart, addToCart } from "@/cart";
import { auth } from "@/auth";
import { addToFavorites, removeFromFavorites } from "@/favorites";

const searchQuery = ref("");
const addedItems = ref([]);

const cartCounts = ref({});

function handleAddToCart(product) {
  addToCart(product);

  if (cartCounts.value[product.id]) {
    cartCounts.value[product.id]++;
  } else {
    cartCounts.value[product.id] = 1;
  }

  addedItems.value.push(product.id);
  setTimeout(() => {
    const index = addedItems.value.indexOf(product.id);
    if (index !== -1) {
      addedItems.value.splice(index, 1);
    }
  }, 500);
}

const itemsPerPage = 6;
const currentPage = ref(1);

const selectedCategory = ref("");
const selectedColor = ref("");

const productList = ref(products);

const categories = computed(() => {
  const set = new Set();
  productList.value.forEach((p) => set.add(p.category));
  return Array.from(set);
});

const colors = computed(() => {
  const set = new Set();
  productList.value.forEach((p) => set.add(p.color));
  return Array.from(set);
});

const filteredProducts = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return productList.value.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    return (
      matchesSearch &&
      (selectedCategory.value
        ? product.category === selectedCategory.value
        : true) &&
      (selectedColor.value ? product.color === selectedColor.value : true)
    );
  });
});

const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / itemsPerPage)
);

const currentProducts = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredProducts.value.slice(startIndex, endIndex);
});

function prevPage() {
  if (currentPage.value > 1) currentPage.value--;
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++;
}

const favoriteIds = ref([]);

onMounted(() => {
  if (auth.currentUser) {
    const favorites = JSON.parse(
      localStorage.getItem(`favorites-${auth.currentUser.email}`) || "[]"
    );
    favoriteIds.value = favorites.map((p) => p.id);

    const cart = getCart();
    cart.forEach((item) => {
      cartCounts.value[item.id] = item.quantity;
    });
  }
});

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

function resetFilters() {
  selectedCategory.value = "";
  selectedColor.value = "";
  searchQuery.value = "";
  currentPage.value = 1;
}

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="catalog-container">
    <h2 class="catalog-title">Каталог товаров</h2>

    <div class="search-and-filters">
      <div class="search-group">
        <label class="filter-label">Поиск:</label>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Поиск по названию и описанию..."
          class="search-input"
        />
        <svg class="search-icon" viewBox="0 0 24 24">
          <path
            d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
          />
        </svg>
      </div>
      <div class="filters">
        <div class="filter-group">
          <label class="filter-label">Категория:</label>
          <select v-model="selectedCategory" class="filter-select">
            <option value="">Все категории</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
        </div>
        <div class="filter-group">
          <label class="filter-label">Цвет:</label>
          <select v-model="selectedColor" class="filter-select">
            <option value="">Все цвета</option>
            <option v-for="color in colors" :key="color" :value="color">
              {{ color }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div
      v-if="filteredProducts.length"
      class="pagination"
      style="margin-top: 0"
    >
      <button
        class="pagination-btn prev"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        ←
      </button>
      <span class="page-info">
        Страница {{ currentPage }} из {{ totalPages }}
      </span>
      <button
        class="pagination-btn next"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        →
      </button>
    </div>

    <div v-if="!filteredProducts.length" class="empty-state">
      <div class="empty-content">
        <img :src="base + '/cart.svg'" alt="Пусто" class="empty-image" />
        <p class="empty-text">Товары не найдены по выбранным фильтрам</p>
        <button class="reset-btn" @click="resetFilters">
          Сбросить фильтры
        </button>
      </div>
    </div>

    <div v-else class="products-grid">
      <div
        v-for="product in currentProducts"
        :key="product.id"
        class="product-card"
      >
        <div class="product-image-wrapper">
          <router-link :to="`/product/${product.id}`">
            <img
              :src="product.image"
              :alt="product.name"
              class="product-image"
            />
          </router-link>
          <button
            @click="toggleFavorite(product)"
            class="favorite-btn"
            :class="{ 'is-favorite': favoriteIds.includes(product.id) }"
          >
            <svg class="heart-icon" viewBox="0 0 24 24">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                   2 5.42 4.42 3 7.5 3c1.74 0 3.41.81
                   4.5 2.09C13.09 3.81 14.76 3
                   16.5 3 19.58 3 22 5.42
                   22 8.5c0 3.78-3.4 6.86-8.55
                   11.54L12 21.35z"
              />
            </svg>
          </button>
        </div>
        <div class="product-info">
          <h3 class="product-title">
            <router-link :to="`/product/${product.id}`">
              {{ product.name }}
            </router-link>
          </h3>
          <p class="product-description">
            {{ product.description }}
          </p>
          <div class="product-meta">
            <span class="product-category">{{ product.category }}</span>
            <span class="product-color">{{ product.color }}</span>
          </div>
          <div class="product-footer">
            <span class="product-price">{{ product.price }} ₽</span>
            <button
              @click="handleAddToCart(product)"
              class="add-to-cart-btn"
              :disabled="!auth.currentUser"
              :class="{ 'added-to-cart': addedItems.includes(product.id) }"
            >
              <svg class="cart-icon" viewBox="0 0 24 24">
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99
                     2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z
                     M1 2v2h2l3.6 7.59-1.35
                     2.45c-.16.28-.25.61-.25.96
                     0 1.1.9 2 2 2h12v-2H7.42
                     c-.14 0-.25-.11-.25-.25l.03-.12
                     .9-1.63h7.45c.75 0 1.41-.41
                     1.75-1.03l3.58-6.49c.08-.14
                     .12-.31.12-.48 0-.55-.45-1-1-1H5.21
                     l-.94-2H1zm16 16c-1.1 0-1.99.9
                     -1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2
                     -2-2z"
                />
              </svg>

              <svg class="check-icon" viewBox="0 0 24 24">
                <path
                  d="M9 16.17L4.83 12l-1.42
                         1.41L9 19l12-12-1.41-1.41z"
                />
              </svg>

              <span v-if="cartCounts[product.id]" class="cart-count-indicator">
                {{ cartCounts[product.id] }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredProducts.length" class="pagination">
      <button
        class="pagination-btn prev"
        @click="prevPage"
        :disabled="currentPage === 1"
      >
        ←
      </button>
      <span class="page-info">
        Страница {{ currentPage }} из {{ totalPages }}
      </span>
      <button
        class="pagination-btn next"
        @click="nextPage"
        :disabled="currentPage === totalPages"
      >
        →
      </button>
    </div>
  </div>
</template>

<style scoped>
.catalog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.catalog-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.filters {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.filter-group {
  flex: 1;
  min-width: 250px;
}

.filter-label {
  display: block;
  margin-bottom: 0.5rem;
  color: #7f8c8d;
  font-weight: 500;
}

.filter-select {
  width: 100%;
  padding: 0.8rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.filter-select:focus {
  border-color: var(--green-primary);
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
  outline: none;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.product-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.product-image-wrapper {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.catalog-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.add-to-cart-btn {
  position: relative;
  background: var(--green-primary);
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.cart-count-indicator {
  position: absolute;
  top: -6px;
  right: -6px;
  background: red;
  color: white;
  font-size: 0.75rem;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 0 0 2px white;
}
.favorite-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: white;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.favorite-btn:hover {
  transform: scale(1.1);
}

.heart-icon {
  width: 24px;
  height: 24px;
  fill: #e0e0e0;
  transition: fill 0.3s ease;
}

.is-favorite .heart-icon {
  fill: #e74c3c;
}

.product-info {
  padding: 1.5rem;
}

.product-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.product-title a {
  color: #2c3e50;
  text-decoration: none;
  transition: color 0.3s ease;
}

.product-title a:hover {
  color: var(--green-primary);
}

.product-description {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.product-meta {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.product-category,
.product-color {
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  background: #f5f5f5;
  color: #7f8c8d;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--green-primary);
}

.add-to-cart-btn {
  position: relative;
  background: var(--green-primary);
  border: none;
  padding: 0.8rem;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: var(--green-dark);
  transform: scale(1.05);
}

.cart-icon {
  width: 24px;
  height: 24px;
  fill: white;
  transition: all 0.3s ease;
  position: absolute;
}

.check-icon {
  width: 24px;
  height: 24px;
  fill: white;
  transition: all 0.3s ease;
  opacity: 0;
  transform: scale(0.5);
  position: absolute;
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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  color: #7f8c8d;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-btn:hover:not(:disabled) {
  border-color: var(--green-primary);
  color: var(--green-primary);
}

.pagination-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.page-info {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 0;
}

.empty-image {
  width: 200px;
  margin-bottom: 1.5rem;
  opacity: 0.7;
}

.empty-text {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.reset-btn {
  padding: 0.8rem 1.5rem;
  background: var(--green-primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-btn:hover {
  background: var(--green-dark);
}

.search-and-filters {
  display: grid;
  gap: 1.5rem;
}

.search-group {
  position: relative;
}

.search-input {
  width: 80%;
  padding: 0.8rem 1.2rem 0.8rem 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: var(--green-primary);
  box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
  outline: none;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 68%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  fill: #7f8c8d;
}

@media (min-width: 768px) {
  .search-and-filters {
    grid-template-columns: 1fr 2fr;
    align-items: start;
  }
}

@media (max-width: 768px) {
  .catalog-title {
    font-size: 2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .product-image-wrapper {
    height: 200px;
  }
}
</style>
