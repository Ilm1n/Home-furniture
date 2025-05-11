<template>
  <div class="terms-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>Условия использования</h1>
        <p class="hero-subtitle">Правила работы с нашим сервисом</p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="terms-content">
      <div class="terms-container">
        <div class="terms-card">
          <div class="section">
            <h2>1. Принятие условий</h2>
            <div class="terms-block">
              <p>Используя наш сервис, вы соглашаетесь с:</p>
              <ul class="terms-list">
                <li>Правилами оформления заказов</li>
                <li>Условиями оплаты</li>
                <li>Политикой возвратов</li>
              </ul>
            </div>
          </div>

          <div class="section">
            <h2>2. Порядок работы</h2>
            <div class="workflow-grid">
              <div class="step-card">
                <div class="step-number">1</div>
                <h3>Выбор товаров</h3>
                <p>Добавляйте товары в корзину через каталог</p>
              </div>
              <div class="step-card">
                <div class="step-number">2</div>
                <h3>Оформление</h3>
                <p>Заполните форму доставки и оплаты</p>
              </div>
              <div class="step-card">
                <div class="step-number">3</div>
                <h3>Получение</h3>
                <p>Отслеживайте статус заказа в личном кабинете</p>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>3. Оплата и доставка</h2>
            <div class="payment-info">
              <div class="payment-card">
                <div class="payment-icon">💳</div>
                <div class="payment-text">
                  <h3>Способы оплаты</h3>
                  <ul>
                    <li>Банковские карты</li>
                    <li>Электронные кошельки</li>
                    <li>Наличные курьеру</li>
                  </ul>
                </div>
              </div>
              <div class="delivery-card">
                <div class="delivery-icon">🚚</div>
                <div class="delivery-text">
                  <h3>Варианты доставки</h3>
                  <ul>
                    <li>Курьерская служба</li>
                    <li>Самовывоз</li>
                    <li>Почта России</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="section">
            <h2>4. Возврат товаров</h2>
            <div class="return-policy">
              <p>Вы можете вернуть товар в течение:</p>
              <div class="return-period">
                <span class="days">14 дней</span>
                <p>с момента получения заказа</p>
              </div>
              <p class="notice">* Для товаров надлежащего качества</p>
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
.terms-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.terms-container {
  max-width: 1000px;
  margin: 0 auto;
}

.terms-card {
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

.terms-list {
  list-style: none;
  padding-left: 1.5rem;
}

.terms-list li {
  position: relative;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
}

.terms-list li::before {
  content: "•";
  color: var(--green-primary);
  position: absolute;
  left: 0;
  font-size: 1.2rem;
}

.workflow-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.step-card {
  text-align: center;
  padding: 2rem;
  border-radius: 15px;
  background: #f8f9fa;
  transition: transform 0.3s ease;
}

.step-card:hover {
  transform: translateY(-5px);
}

.step-number {
  width: 40px;
  height: 40px;
  background: var(--green-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-weight: bold;
}

.payment-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1.5rem;
}

.payment-card,
.delivery-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 15px;
  background: #f8f9fa;
}

.payment-icon,
.delivery-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.return-policy {
  text-align: center;
  padding: 2rem;
  background: #fff9f9;
  border-radius: 15px;
  border-left: 4px solid var(--green-primary);
}

.days {
  font-size: 2rem;
  color: var(--green-primary);
  font-weight: bold;
  display: block;
  margin: 1rem 0;
}

.notice {
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .terms-card {
    padding: 2rem;
  }

  .payment-info {
    grid-template-columns: 1fr;
  }

  .workflow-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .section h2 {
    font-size: 1.5rem;
  }

  .terms-card {
    padding: 1.5rem;
  }

  .payment-card,
  .delivery-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
