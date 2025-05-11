<template>
  <div class="profile-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>{{ auth.currentUser.name }}</h1>
        <p class="hero-subtitle" v-if="auth.currentUser">
          Добро пожаловать в личный кабинет
        </p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="profile-content">
      <div class="profile-container">
        <div class="profile-card">
          <div class="user-info">
            <div class="user-avatar green-bg">
              {{ auth.currentUser?.email[0].toUpperCase() }}
            </div>
            <div class="user-details">
              <h2>email: {{ auth.currentUser?.email }}</h2>
            </div>
          </div>

          <div class="quick-stats">
            <router-link to="/cart" class="quick-stat-btn cart-btn"
              >Корзина <span class="badge">{{ cartCount }}</span></router-link
            >

            <router-link to="/favorites" class="quick-stat-btn fav-btn"
              >Избранное
              <span class="badge">{{ favoritesCount }}</span></router-link
            >
          </div>

          <div class="profile-actions">
            <button @click="handleLogout" class="logout-btn">
              <svg class="icon" viewBox="0 0 24 24">
                <path
                  d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                />
              </svg>
              Выйти из аккаунта
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { auth, logout } from "@/auth";
import { getCart } from "@/cart";
import { getFavorites } from "@/favorites";
import { computed } from "vue";
import { useRouter } from "vue-router";


const cartCount = computed(() => getCart().length);
const favoritesCount = computed(() => getFavorites().length);

const router = useRouter();

function handleLogout() {
  logout();
  router.push("/");
}
</script>

<style scoped>
.green-bg {
  background: var(--green-primary);
}

.green-light-bg {
  background: var(--green-light-bg);
}

.profile-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero {
  position: relative;
  padding: 6rem 2rem;
  border-radius: 20px;
  overflow: hidden;
  margin: 2rem 0 4rem;
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
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.4rem;
  opacity: 0.9;
}

.profile-container {
  max-width: 800px;
  margin: 0 auto;
}

.profile-card {
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  color: white;
  font-weight: bold;
}

.user-details h2 {
  color: var(--green-primary);
  margin-bottom: 0.5rem;
}

.member-since {
  color: #7f8c8d;
  font-size: 0.9rem;
}

.quick-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.quick-stat-btn {
  position: relative;
  padding: 1.5rem;
  border: none;
  border-radius: 15px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-btn {
  background: var(--green-light-bg);
  color: var(--green-primary);
}

.fav-btn {
  background: #fff3e0;
  color: #ef6c00;
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background: var(--green-primary);
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
}

.fav-btn .badge {
  background: #ef6c00;
}

.quick-stat-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: var(--green-light-bg);
  border: 2px solid var(--green-primary);
  border-radius: 50px;
  color: var(--green-primary);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logout-btn:hover {
  background: var(--green-primary);
  color: white;
  transform: translateY(-2px);
}

.icon {
  width: 24px;
  height: 24px;
  fill: currentColor;
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .profile-card {
    padding: 2rem;
  }

  .user-info {
    flex-direction: column;
    text-align: center;
  }

  .quick-stats {
    grid-template-columns: 1fr;
  }

  .quick-stat-btn {
    padding: 1.2rem;
  }
}

@media (max-width: 576px) {
  .logout-btn {
    width: 100%;
    justify-content: center;
  }

  .badge {
    width: 24px;
    height: 24px;
    font-size: 0.8rem;
  }
}
</style>
