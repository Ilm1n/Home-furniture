<template>
  <div class="home-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>Создайте уютный интерьер с нашей мебелью</h1>
        <p class="hero-subtitle">
          Экологичные материалы • Бесплатная сборка • Гарантия 3 года
        </p>
        <router-link to="/catalog" class="btn-shop-now">
          Выбрать мебель
          <span class="icon-arrow">→</span>
        </router-link>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <div class="advantages-banner">
      <div class="advantage-item">
        <div class="icon-box green-light-bg">
          <i class="icon">🌿</i>
        </div>
        <h3>Экоматериалы</h3>
        <p>Безопасно для детей и аллергиков</p>
      </div>
      <div class="advantage-item">
        <div class="icon-box green-light-bg">
          <i class="icon">🚚</i>
        </div>
        <h3>Быстрая доставка</h3>
        <p>По всей России за 3-7 дней</p>
      </div>
      <div class="advantage-item">
        <div class="icon-box green-light-bg">
          <i class="icon">🎁</i>
        </div>
        <h3>Скидки</h3>
        <p>Постоянные акции и специальные предложения</p>
      </div>
    </div>

    <section class="categories">
      <h2>Исследуйте коллекции</h2>
      <div class="category-grid">
        <router-link
          v-for="(category, index) in categories"
          :key="index"
          :to="`/catalog`"
          :class="`category-card color-variant-${(index % 3) + 1}`"
        >
          <div class="category-icon-container">
            <img
              class="category-icon"
              :src="'/Home-furniture/cat-icon' + (index + 1) + '.svg'"
              alt=""
            />
          </div>
          <div class="category-content">
            <h3>{{ category }}</h3>
            <p>Посмотреть коллекцию →</p>
          </div>
        </router-link>
      </div>
    </section>

    <section class="trends green-light-bg">
      <div class="trends-content">
        <h2>Весенние тренды 2025</h2>
        <p class="trends-subtitle">Теплые текстуры и натуральные материалы</p>
        <div class="trends-grid">
          <div class="trend-item">
            <img
              :src="base + '/images/home-page/2025trend1.webp'"
              alt="Тренд"
            />
            <div class="trend-info">
              <h3>Деревянные фактуры</h3>
              <p>Натуральное дерево в современной обработке</p>
            </div>
          </div>
          <div class="trend-item">
            <img
              :src="base + '/images/home-page/2025trend2.webp'"
              alt="Тренд"
            />
            <div class="trend-info">
              <h3>Зеленые акценты</h3>
              <p>Природные оттенки в интерьере</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="featured-products">
      <h2>Популярные товары</h2>
      <p class="section-subtitle">Выбор наших покупателей</p>
      <div class="products-grid">
        <div
          v-for="product in productList.slice(0, 4)"
          :key="product.id"
          class="product-card"
        >
          <div class="product-badge green-bg" v-if="product.isNew">Новинка</div>
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <div class="price-container">
              <span class="price">{{ product.price }} ₽</span>
              <span class="old-price" v-if="product.oldPrice"
                >{{ product.oldPrice }} ₽</span
              >
            </div>
            <router-link
              :to="`/product/${product.id}`"
              class="btn-view-product"
            >
              Подробнее
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="special-offer green-bg">
      <div class="offer-content">
        <h2>Специальное предложение</h2>
        <p class="offer-text">
          При покупке от 50 000 ₽ — скидка 10% и бесплатная доставка!
        </p>
        <router-link to="/catalog" class="btn-offer">
          Воспользоваться предложением
        </router-link>
      </div>
      <div class="offer-image">
        <img
          :src="base + '/images/home-page/special-offer.webp'"
          alt="Специальное предложение"
        />
      </div>
    </section>

    <section class="testimonials">
      <h2>Отзывы наших клиентов</h2>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <div class="testimonial-header">
            <img
              :src="base + '/images/reviews/fake-female.webp'"
              alt="Пользователь"
              class="user-avatar"
            />
            <div class="user-info">
              <h4>Анна К.</h4>
              <div class="rating">★★★★★</div>
            </div>
          </div>
          <p class="testimonial-text">
            "Мебель превзошла все ожидания! Качество на высоте, доставили раньше
            срока."
          </p>
        </div>
        <div class="testimonial-card">
          <div class="testimonial-header">
            <img
              :src="base + '/images/reviews/fake-male.webp'"
              alt="Пользователь"
              class="user-avatar"
            />
            <div class="user-info">
              <h4>Михаил С.</h4>
              <div class="rating">★★★★☆</div>
            </div>
          </div>
          <p class="testimonial-text">
            "Отличный сервис. Помогли с выбором, учли все пожелания по дизайну."
          </p>
        </div>
      </div>
    </section>

    <section class="newsletter green-light-bg">
      <div class="newsletter-content">
        <h2>Подпишитесь на рассылку</h2>
        <p>
          Получайте первыми информацию о новых коллекциях и специальных
          предложениях
        </p>
        <form class="subscribe-form">
          <input type="email" placeholder="Ваш email" required />
          <button
            type="submit"
            class="btn-subscribe green-bg"
            style="color: #7f8c8d"
          >
            Подписаться
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { categories } from "@/data/categories";
import { products } from "@/data/products";

const productList = ref(products);

const base = import.meta.env.BASE_URL
</script>

<style>
:root {
  --green-primary: #2a9d8f;
  --green-dark: #1d7870;
  --green-light: #d8f3dc;
  --green-accent: #76c893;
  --green-light-bg: rgba(216, 243, 220, 0.3);
}
</style>

<style scoped>
.home-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #2c3e50;
}

h1,
h2,
h3,
h4 {
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  line-height: 1.6;
}

section {
  margin: 4rem 0;
  padding: 0 1rem;
}

.section-subtitle {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.green-bg {
  background: var(--green-primary);
}

.green-light-bg {
  background: var(--green-light-bg);
}

.hero {
  position: relative;
  padding: 5rem 2rem;
  border-radius: 20px;
  overflow: hidden;
  margin: 2rem 0;
  color: white;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero h1 {
  font-size: 2.8rem;
  color: white;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.3rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  color: white;
}

.circle-accent {
  position: absolute;
  width: 400px;
  height: 400px;
  background: var(--green-accent);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  top: -50px;
  right: -100px;
}

.wave-pattern {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg"><path d="M0 80L1200 0V120H0z" fill="%23ffffff"/></svg>');
}

.advantages-banner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 3rem;
  background: var(--green-light);
  border-radius: 20px;
  margin: 2rem 0;
}

.advantage-item {
  text-align: center;
  padding: 1rem;
}

.icon-box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--green-primary);
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.category-card {
  height: 400px;
  border-radius: 20px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.category-card:hover {
  transform: translateY(-10px);
}

.category-icon-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon {
  width: 120px;
  height: 120px;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-icon {
  opacity: 0.7;
}

.color-variant-1 {
  background: linear-gradient(45deg, var(--green-primary), #4caf50);
}
.color-variant-2 {
  background: linear-gradient(45deg, #8bc34a, var(--green-accent));
}
.color-variant-3 {
  background: linear-gradient(45deg, var(--green-dark), #009688);
}

.category-content {
  position: relative;
  z-index: 2;
}

.category-content h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: white;
}

.category-content p {
  color: rgba(255, 255, 255, 0.8);
}

.trends {
  padding: 4rem 2rem;
  border-radius: 20px;
}

.trends-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.trend-item {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.trend-item img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.trend-info {
  padding: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.product-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: relative;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.product-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  z-index: 2;
}

.product-image {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.product-info {
  padding: 1.5rem;
}

.product-description {
  margin: 0.8rem 0;
  font-size: 0.9rem;
}

.price-container {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
}

.price {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--green-primary);
}

.old-price {
  font-size: 1rem;
  text-decoration: line-through;
  color: #95a5a6;
}

.special-offer {
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  color: white;
}

.offer-content {
  flex: 1;
  padding: 3rem;
}

.offer-image {
  flex: 1;
  margin: 20px;
}

.offer-image img {
  width: 100%;
  height: 100%;
  border-radius: 45px;
  object-fit: cover;
}

.offer-text {
  font-size: 1.2rem;
  margin: 1.5rem 0;
  color: white;
  opacity: 0.9;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.testimonial-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info h4 {
  margin-bottom: 0.3rem;
  color: #2c3e50;
}

.rating {
  color: #f1c40f;
  font-size: 1.2rem;
}

.testimonial-text {
  font-style: italic;
  color: #7f8c8d;
}

.newsletter {
  padding: 3rem 2rem;
  border-radius: 20px;
  text-align: center;
}

.subscribe-form {
  display: flex;
  max-width: 500px;
  margin: 2rem auto 0;
}

.subscribe-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 50px 0 0 50px;
  font-size: 1rem;
}

.subscribe-form button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 0 50px 50px 0;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.btn-shop-now,
.btn-view-product,
.btn-offer,
.btn-subscribe {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-shop-now {
  background: white;
  color: var(--green-primary);
}

.btn-shop-now:hover {
  background: var(--green-light);
  color: var(--green-dark);
}

.btn-view-product {
  background: var(--green-light);
  color: var(--green-primary);
  border: 1px solid var(--green-primary);
  padding: 0.8rem 1.5rem;
}

.btn-view-product:hover {
  background: var(--green-primary);
  color: white;
}

.btn-offer,
.btn-subscribe {
  background: white;
  color: var(--green-primary);
}

.btn-offer:hover,
.btn-subscribe:hover {
  background: var(--green-light);
}

.icon-arrow {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn-shop-now:hover .icon-arrow {
  transform: translateX(3px);
}

@media (max-width: 992px) {
  .special-offer {
    flex-direction: column;
  }

  .offer-image {
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .category-grid {
    grid-template-columns: 1fr;
  }

  .advantages-banner {
    grid-template-columns: 1fr;
    padding: 2rem 1rem;
  }
}

@media (max-width: 576px) {
  .subscribe-form {
    flex-direction: column;
  }

  .subscribe-form input,
  .subscribe-form button {
    border-radius: 50px;
  }

  .subscribe-form input {
    margin-bottom: 1rem;
  }
}
</style>
