<template>
  <div class="auth-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>Создайте аккаунт</h1>
        <p class="hero-subtitle">Присоединяйтесь к нашему сообществу</p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="auth-form">
      <div class="form-container">
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="form-group">
            <label>Ваше имя</label>
            <input
              v-model="name"
              type="text"
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              v-model="email"
              type="email"
              placeholder="example@mail.ru"
              required
            />
          </div>

          <div class="form-group">
            <label>Пароль</label>
            <input
              v-model="password"
              type="password"
              placeholder="Не менее 6 символов"
              required
              minlength="6"
            />
          </div>

          <button type="submit" class="submit-btn green-bg">
            Зарегистрироваться
          </button>

          <p class="auth-link">
            Уже есть аккаунт?
            <router-link to="/login">Войти</router-link>
          </p>

          <p v-if="message" class="error-message">{{ message }}</p>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { register } from "@/auth";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const message = ref("");
const router = useRouter();

function handleRegister() {
  const result = register(name.value, email.value, password.value);
  if (result === "ok") {
    router.push("/login");
  } else {
    message.value = result;
  }
}
</script>

<style scoped>
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
.green-bg {
  background: var(--green-primary);
}

.green-light-bg {
  background: var(--green-light-bg);
}
.auth-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.auth-form {
  padding: 4rem 0;
}

.form-container {
  max-width: 500px;
  margin: 0 auto;
}

.register-form {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: var(--green-primary);
  outline: none;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.auth-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #7f8c8d;
}

.auth-link a {
  color: var(--green-primary);
  text-decoration: none;
  font-weight: 500;
}

.error-message {
  color: #e74c3c;
  text-align: center;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .register-form {
    padding: 2rem;
  }
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
  .form-group input {
    padding: 0.8rem;
  }

  .submit-btn {
    font-size: 1rem;
  }
}
</style>
