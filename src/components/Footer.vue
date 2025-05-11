<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-title">Home</h3>
        <p class="footer-text">Создаем уют в вашем доме с 2010 года</p>
        <div class="social-links">
          <a href="#" class="social-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <a href="#" class="social-link">
            <svg class="social-icon" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Меню</h4>
        <ul class="footer-links">
          <li><router-link to="/" class="footer-link">Главная</router-link></li>
          <li><router-link to="/catalog" class="footer-link">Каталог</router-link></li>
          <li><router-link to="/about" class="footer-link">О нас</router-link></li>
          <li><router-link to="/contacts" class="footer-link">Контакты</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Контакты</h4>
        <ul class="footer-contacts">
          <li class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            info@homefurniture.ru
          </li>
          <li class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            +7 (495) 123-45-67
          </li>
          <li class="contact-item">
            <svg class="contact-icon" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            г. Санкт-Петербург, ул. Руставели, 33
          </li>
        </ul>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Подписка</h4>
        <p class="footer-text">Подпишитесь на новости и акции</p>
        <form class="subscribe-form">
          <input type="email" placeholder="Ваш email" required class="subscribe-input">
          <button type="submit" class="subscribe-btn">Подписаться</button>
        </form>
      </div>
    </div>

    <div class="footer-bottom">
      <p class="copyright">© 2025 Home. Все права защищены.</p>
      <div class="legal-links">
        <router-link to="/privacy" class="legal-link">Политика конфиденциальности</router-link>
        <router-link to="/terms" class="legal-link">Условия использования</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 3rem 0 0;
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section {
  margin-bottom: 2rem;
}

.footer-title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--green-light);
}

.footer-subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--green-light);
}

.footer-text {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--green-primary);
  transform: translateY(-3px);
}

.social-icon {
  width: 20px;
  height: 20px;
  fill: #fff;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  display: block;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: var(--green-light);
  padding-left: 5px;
}

.footer-contacts {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #bdc3c7;
  margin-bottom: 1rem;
}

.contact-icon {
  width: 20px;
  height: 20px;
  fill: var(--green-primary);
}

.subscribe-form {
  display: flex;
  margin-top: 1rem;
}

.subscribe-input {
  flex: 1;
  padding: 0.8rem;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.subscribe-btn {
  padding: 0 1.5rem;
  background-color: var(--green-primary);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.subscribe-btn:hover {
  background-color: var(--green-dark);
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  margin-top: 2rem;
}

.copyright {
  text-align: center;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.legal-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.legal-link {
  color: #7f8c8d;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.legal-link:hover {
  color: var(--green-light);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }
  
  .footer-section {
    text-align: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .subscribe-form {
    flex-direction: column;
  }
  
  .subscribe-input,
  .subscribe-btn {
    border-radius: 4px;
  }
  
  .subscribe-btn {
    margin-top: 0.5rem;
  }
  
  .legal-links {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
}
</style>