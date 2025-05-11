<template>
  <header class="header">
    <nav class="nav">
      <div class="nav-left">
        <router-link to="/" class="nav-brand" @click="closeMenu"
          >Home</router-link
        >
      </div>

      <button
        class="burger-menu"
        @click="toggleMenu"
        :aria-expanded="isMenuOpen.toString()"
        aria-label="Открыть меню"
      >
        <span class="burger-line"></span>
        <span class="burger-line"></span>
        <span class="burger-line"></span>
      </button>

      <div class="mobile-menu" :class="{ open: isMenuOpen }">
        <router-link to="/" class="nav-link" @click="closeMenu"
          >Главная</router-link
        >
        <router-link to="/catalog" class="nav-link" @click="closeMenu"
          >Каталог</router-link
        >
        <router-link to="/about" class="nav-link" @click="closeMenu"
          >О нас</router-link
        >
        <router-link to="/contacts" class="nav-link" @click="closeMenu"
          >Контакты</router-link
        >
        <router-link
          v-if="auth.currentUser"
          to="/cart"
          class="nav-link"
          @click="closeMenu"
          >Корзина</router-link
        >
        <router-link
          v-if="auth.currentUser"
          to="/favorites"
          class="nav-link"
          @click="closeMenu"
          >Избранное</router-link
        >
        <router-link
          v-if="auth.currentUser"
          to="/profile"
          class="nav-link"
          @click="closeMenu"
          >Профиль</router-link
        >
        <button
          v-if="auth.currentUser"
          class="logout-btn"
          style="border-bottom: none"
          @click="handleLogout"
        >
          Выйти
        </button>
        <router-link
          v-if="!auth.currentUser"
          to="/login"
          class="nav-link"
          @click="closeMenu"
          >Вход</router-link
        >
        <router-link
          v-if="!auth.currentUser"
          to="/register"
          class="nav-link"
          @click="closeMenu"
          >Регистрация</router-link
        >
      </div>

      <div class="nav-center">
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/catalog" class="nav-link">Каталог</router-link>
        <router-link to="/about" class="nav-link">О нас</router-link>
        <router-link to="/contacts" class="nav-link">Контакты</router-link>
        <router-link v-if="auth.currentUser" to="/cart" class="nav-link"
          >Корзина</router-link
        >
        <router-link v-if="auth.currentUser" to="/favorites" class="nav-link"
          >Избранное</router-link
        >
      </div>

      <div class="nav-right">
        <template v-if="auth.currentUser">
          <router-link to="/profile" class="nav-link">Профиль</router-link>
          <button class="logout-btn" @click="handleLogout">Выйти</button>
        </template>
        <template v-else>
          <router-link to="/login" class="nav-link">Вход</router-link>
          <router-link to="/register" class="nav-link">Регистрация</router-link>
        </template>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, watch } from "vue";
import { auth, logout } from "@/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleLogout() {
  logout();
  router.push("/login");
  closeMenu();
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});
</script>

<style scoped>
.header {
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
}

.burger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 110;
}
.burger-line {
  display: block;
  height: 2px;
  background: #2c3e50;
  transition: transform 0.3s, opacity 0.3s;
}
.burger-menu[aria-expanded="true"] .burger-line:nth-child(1) {
  transform: rotate(45deg) translate(4px, 4px);
}
.burger-menu[aria-expanded="true"] .burger-line:nth-child(2) {
  opacity: 0;
}
.burger-menu[aria-expanded="true"] .burger-line:nth-child(3) {
  transform: rotate(-45deg) translate(4px, -4px);
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: -120vw;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 4rem 1.5rem 1.5rem;
  gap: 1rem;
  transition: left 0.3s ease;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  z-index: 105;
}
.mobile-menu.open {
  left: 0;
}

.mobile-menu .nav-link,
.mobile-menu .logout-btn {
  width: 30%;
  text-align: left;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #eee;
}

.nav-center,
.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-link {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}
.nav-link:hover,
.router-link-active {
  color: #42b983;
}

.logout-btn {
  background-color: transparent;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;
}
.logout-btn:hover {
  background-color: #e74c3c;
  color: #fff;
}

@media (max-width: 768px) {
  .burger-menu {
    display: flex;
  }
  .nav-center,
  .nav-right {
    display: none;
  }
}
</style>
