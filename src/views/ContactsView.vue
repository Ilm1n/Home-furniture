<template>
  <div class="contacts-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>Наши контакты</h1>
        <p class="hero-subtitle">Мы всегда рады вашему обращению</p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="contact-info">
      <div class="contact-container">
        <div class="contact-map" style="position: relative; overflow: hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=30.436863%2C60.009640&mode=whatshere&whatshere%5Bpoint%5D=30.435963%2C60.010609&whatshere%5Bzoom%5D=17&z=18.01"
            width="560"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="position: relative"
            class="map-iframe"
          ></iframe>
        </div>

        <div class="contact-details">
          <div class="contact-card">
            <div class="contact-icon green-bg">
              <svg viewBox="0 0 24 24">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                />
              </svg>
            </div>
            <div class="contact-text">
              <h3>Электронная почта</h3>
              <a href="mailto:info@Home.ru">info@homefurniture.ru</a>
              <a href="mailto:support@Home.ru">supprot@homefurniture.ru</a>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon green-bg">
              <svg viewBox="0 0 24 24">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                />
              </svg>
            </div>
            <div class="contact-text">
              <h3>Телефоны</h3>
              <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              <a href="tel:+78001234567">8 (800) 123-45-67</a>
            </div>
          </div>

          <div class="contact-card">
            <div class="contact-icon green-bg">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>
            </div>
            <div class="contact-text">
              <h3>Адрес</h3>
              <p>г. Санкт-Петербург, ул. Руставели, 33</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form green-light-bg">
      <div class="form-container">
        <h2 style="text-align: center">Остались вопросы?</h2>
        <h2 class="form-subtitle">Напишите нам, и мы ответим в течение часа</h2>

        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <label>Ваше имя</label>
              <input type="text" v-model="form.name" required />
            </div>
            <div class="form-group" style="margin-left: 10px">
              <label>Ваш email</label>
              <input type="email" v-model="form.email" required />
            </div>
          </div>

          <div class="form-group">
            <label>Сообщение</label>
            <textarea v-model="form.message" rows="5" required></textarea>
          </div>

          <button type="submit" class="submit-btn green-bg">
            Отправить сообщение
            <i class="icon-arrow">→</i>
          </button>
        </form>
      </div>
    </section>

    <section class="faq-section">
      <h2>Частые вопросы</h2>
      <div class="faq-grid">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="faq-card"
          :class="{ active: faq.isOpen }"
        >
          <div class="faq-question" @click="toggleFAQ(index)">
            <h3>{{ faq.question }}</h3>
            <button class="toggle-btn">{{ faq.isOpen ? "-" : "+" }}</button>
          </div>
          <p class="faq-answer">
            {{ faq.answer }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";


const faqs = ref([
  {
    question: "Как оформить заказ?",
    answer:
      "Выберите товары в каталоге, добавьте в корзину и следуйте инструкциям оформления заказа.",
    isOpen: false,
  },
  {
    question: "Какие способы оплаты доступны?",
    answer:
      "Мы принимаем банковские карты, электронные кошельки и наличные при получении.",
    isOpen: false,
  },
  {
    question: "Есть ли доставка в регионы?",
    answer:
      "Да, мы осуществляем доставку по всей России транспортными компаниями.",
    isOpen: false,
  },
]);

const toggleFAQ = (index) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
};

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {

  console.log("Форма отправлена:", form.value);
  form.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
.contacts-page {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin: 4rem 0;
}

.contact-map {
  height: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.green-bg {
  background: var(--green-primary);
}

.green-light-bg {
  background: var(--green-light-bg);
}

.map-iframe {
  width: 100%;
  height: 100%;
  border: 0;
}

.contact-details {
  display: grid;
  gap: 2rem;
}

.contact-card {
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-5px);
}

.contact-icon {
  width: 60px;
  height: 60px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-icon svg {
  width: 30px;
  height: 30px;
  fill: white;
}

.contact-text h3 {
  margin-bottom: 1rem;
  color: var(--green-primary);
}

.contact-text a {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  margin-bottom: 0.5rem;
}

.contact-text a:hover {
  color: var(--green-dark);
}

.contact-form {
  padding: 6rem 0;
}

.form-container {
  max-width: 800px;
  margin: 0 auto;
}

.form-subtitle {
  text-align: center;
  margin-bottom: 3rem;
  color: #7f8c8d;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--green-primary);
  outline: none;
}

.submit-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.faq-section {
  padding: 6rem 0 4rem;
}

.faq-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
}

.faq-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.toggle-btn {
  background: var(--green-primary);
  color: white;
  border: none;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn:hover {
  background: var(--green-dark);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
  color: #7f8c8d;
}

.faq-card.active .faq-answer {
  max-height: 200px;
  padding-top: 1rem;
}

@media (max-width: 1200px) {
  .contact-container {
    grid-template-columns: 1fr;
  }

  .contact-map {
    height: 400px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .contact-card {
    flex-direction: column;
    text-align: center;
  }

  .contact-icon {
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .contact-map {
    height: 300px;
  }

  .form-group input,
  .form-group textarea {
    padding: 0.8rem;
  }

  .submit-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
