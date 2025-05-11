<template>
  <div class="policy-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>Политика конфиденциальности</h1>
        <p class="hero-subtitle">Ваша безопасность — наш приоритет</p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="policy-content">
      <div class="policy-container">
        <div class="policy-card">
          <div class="section">
            <h2>1. Сбор информации</h2>
            <p>Мы собираем следующие типы данных:</p>
            <ul class="policy-list">
              <li>Персональные данные при регистрации</li>
              <li>Информация о заказах и транзакциях</li>
              <li>Технические данные устройства и браузера</li>
            </ul>
          </div>

          <div class="section">
            <h2>2. Использование данных</h2>
            <p>Собранная информация используется для:</p>
            <div class="usage-grid">
              <div class="usage-card">
                <div class="icon">🛒</div>
                <p>Обработки заказов</p>
              </div>
              <div class="usage-card">
                <div class="icon">🔒</div>
                <p>Защиты аккаунтов</p>
              </div>
              <div class="usage-card">
                <div class="icon">📧</div>
                <p>Отправки уведомлений</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>3. Защита данных</h2>
            <p>Мы применяем следующие меры безопасности:</p>
            <ul class="security-list">
              <li>Шифрование SSL/TLS</li>
              <li>Регулярные аудиты безопасности</li>
              <li>Ограниченный доступ к данным</li>
            </ul>
          </div>

          <div class="section">
            <h2>4. Ваши права</h2>
            <p>Вы имеете право:</p>
            <div class="rights-grid">
              <div class="right-card">
                <h3>Доступ к данным</h3>
                <p>Запросить информацию о хранящихся данных</p>
              </div>
              <div class="right-card">
                <h3>Удаление аккаунта</h3>
                <p>Полностью удалить свои персональные данные</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
.policy-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.policy-container {
  max-width: 800px;
  margin: 0 auto;
}

.policy-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin: 2rem 0;
}

.section {
  margin-bottom: 3rem;
}

.section h2 {
  color: var(--green-primary);
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
}

.policy-list {
  list-style: none;
  padding-left: 1.5rem;
}

.policy-list li {
  position: relative;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
}

.policy-list li::before {
  content: "•";
  color: var(--green-primary);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.usage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.usage-card {
  text-align: center;
  padding: 1.5rem;
  border-radius: 15px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.usage-card:hover {
  transform: translateY(-5px);
}

.usage-card .icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.security-list {
  background: #fff9f9;
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid var(--green-primary);
}

.rights-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.right-card {
  padding: 1.5rem;
  border: 2px solid var(--green-light-bg);
  border-radius: 15px;
}

.right-card h3 {
  color: var(--green-primary);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .policy-card {
    padding: 2rem;
  }

  .rights-grid {
    grid-template-columns: 1fr;
  }

  .usage-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .section h2 {
    font-size: 1.5rem;
  }

  .policy-card {
    padding: 1.5rem;
  }
}
</style>
