<script setup>
import { ref, computed } from "vue";
import { getCart, removeFromCart, clearCart, addToCart } from "@/cart";

const cart = ref(getCart());

const totalPrice = computed(() => {
  return cart.value.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
});

function removeProduct(productId) {
  removeFromCart(productId);
  cart.value = getCart();
}

function addProduct(product) {
  addToCart(product);
  cart.value = getCart();
}

function emptyCart() {
  clearCart();
  cart.value = [];
}

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="cart-container">
    <h2 class="cart-title">Ваша корзина</h2>

    <div v-if="cart.length === 0" class="empty-cart">
      <img :src="base + '/cart.svg'" alt="Корзина пуста" class="empty-image" />
      <p class="empty-text">Ваша корзина пока пуста</p>
      <router-link to="/catalog" class="continue-shopping-btn">
        Перейти к покупкам →
      </router-link>
    </div>

    <div v-else class="cart-content">
      <div v-for="product in cart" :key="product.id" class="cart-item">
        <div class="product-image-wrapper">
          <img :src="product.image" :alt="product.name" class="product-image" />
        </div>

        <div class="product-info">
          <h3 class="product-title">
            <router-link :to="`/product/${product.id}`">
              {{ product.name }}
            </router-link>
          </h3>
          <div class="price-info">
            <span class="price">{{ product.price }} ₽</span>
            <span class="old-price" v-if="product.oldPrice"
              >{{ product.oldPrice }} ₽</span
            >
          </div>

          <div class="quantity-controls">
            <button
              class="quantity-btn"
              @click="
                product.quantity > 1
                  ? product.quantity--
                  : removeProduct(product.id)
              "
            >
              −
            </button>
            <span class="quantity">{{ product.quantity }}</span>
            <button class="quantity-btn" @click="addProduct(product)">+</button>
          </div>
        </div>

        <button @click="removeProduct(product.id)" class="remove-btn">
          <svg class="trash-icon" viewBox="0 0 24 24">
            <path
              d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
            />
          </svg>
        </button>
      </div>

      <div class="cart-summary">
        <div class="total-price">
          <span class="total-label">Общая сумма:</span>
          <span class="total-value">{{ totalPrice }} ₽</span>
        </div>

        <div class="cart-actions">
          <button @click="emptyCart" class="clear-cart-btn">
            Очистить корзину
          </button>
          <router-link to="/checkout" class="checkout-btn green-bg">
            Оформить заказ
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

.cart-title {
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.empty-cart {
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
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
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

.cart-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.product-image-wrapper {
  width: 150px;
  height: 150px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-info {
  flex-grow: 1;
}

.product-title {
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.price-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.price {
  font-size: 1.1rem;
  font-weight: bold;
  color: var(--green-primary);
}

.old-price {
  font-size: 0.9rem;
  color: #95a5a6;
  text-decoration: line-through;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: 2px solid var(--green-primary);
  background: none;
  border-radius: 50%;
  font-size: 1.2rem;
  color: var(--green-primary);
  cursor: pointer;
  transition: all 0.3s ease;
}

.quantity-btn:hover {
  background: var(--green-primary);
  color: white;
}

.quantity {
  width: 40px;
  text-align: center;
  font-weight: bold;
}

.remove-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: flex-start;
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

.cart-summary {
  margin-top: 3rem;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.total-price {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.total-label {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.total-value {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--green-primary);
}

.cart-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.clear-cart-btn {
  padding: 0.8rem 1.5rem;
  background: none;
  border: 2px solid #e74c3c;
  color: #e74c3c;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.clear-cart-btn:hover {
  background: #e74c3c;
  color: white;
}

.checkout-btn {
  padding: 0.8rem 2.5rem;
  border: 2px solid var(--green-primary);
  border-radius: 8px;
  text-decoration: none;
  color: var(--green-primary);
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
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
@media (max-width: 768px) {
  .cart-item {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  .product-image-wrapper {
    width: 100%;
    height: 200px;
  }

  .cart-actions {
    flex-direction: column;
  }

  .checkout-btn,
  .clear-cart-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
