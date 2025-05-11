<template>
  <div class="about-page">
    <section class="hero green-bg">
      <div class="hero-content">
        <h1>О компании Home</h1>
        <p class="hero-subtitle">
          Создаём экологичную мебель для вашего уюта с 2010 года
        </p>
      </div>
      <div class="hero-decoration">
        <div class="circle-accent"></div>
        <div class="wave-pattern"></div>
      </div>
    </section>

    <section class="philosophy">
      <div class="philosophy-content">
        <div class="philosophy-image">
          <img
            :src="base + '/images/about/philosophy.webp'"
            alt="Наше производство"
          />
        </div>
        <div class="philosophy-text">
          <h2>Наша философия</h2>
          <p class="highlight-text">
            Качество, экология и забота о клиенте - основа нашего подхода
          </p>
          <div class="philosophy-points">
            <div class="point-item">
              <div class="point-icon green-bg">♻️</div>
              <p>Используем перерабатываемые материалы</p>
            </div>
            <div class="point-item">
              <div class="point-icon green-bg">🏭</div>
              <p>Собственное производство в России</p>
            </div>
            <div class="point-item">
              <div class="point-icon green-bg">🎓</div>
              <p>Команда профессиональных дизайнеров</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="principles green-light-bg">
      <h2>Наши принципы работы</h2>
      <div class="principles-grid">
        <div class="principle-card">
          <div class="icon-box green-bg">
            <i class="icon">🌱</i>
          </div>
          <h3>Экологичность</h3>
          <ul class="principle-list">
            <li>FSC-сертифицированная древесина</li>
            <li>Водоэмульсионные краски</li>
            <li>Перерабатываемая упаковка</li>
          </ul>
        </div>
        <div class="principle-card">
          <div class="icon-box green-bg">
            <i class="icon">⚙️</i>
          </div>
          <h3>Качество</h3>
          <ul class="principle-list">
            <li>5 лет гарантии на изделия</li>
            <li>Немецкая фурнитура Blum</li>
            <li>3 этапа контроля качества</li>
          </ul>
        </div>
        <div class="principle-card">
          <div class="icon-box green-bg">
            <i class="icon">💡</i>
          </div>
          <h3>Инновации</h3>
          <ul class="principle-list">
            <li>Умные системы хранения</li>
            <li>AR-примерка в приложении</li>
            <li>Эко-конструкторы онлайн</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="history">
      <h2>Этапы развития</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-year">2010</div>
          <div class="timeline-content">
            <h3>Основание компании</h3>
            <p>Первая мастерская в Подмосковье, 5 сотрудников</p>
            <div class="timeline-badge green-bg">Старт</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2016</div>
          <div class="timeline-content">
            <h3>Собственный цех</h3>
            <p>Запуск производства площадью 1500 м²</p>
            <div class="timeline-badge green-bg">Рост</div>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2024</div>
          <div class="timeline-content">
            <h3>Премия EcoDesign</h3>
            <p>Лучший экологичный производитель мебели</p>
            <div class="timeline-badge green-bg">Признание</div>
          </div>
        </div>
      </div>
    </section>

    <section class="team">
      <h2>Наша команда</h2>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-photo">
            <img
              :src="base + '/images/about/member1.webp'"
              alt="Алексей Петров"
            />
            <div class="member-social">
              <a href="#" class="social-link green-bg">in</a>
            </div>
          </div>
          <h3>Алексей Петров</h3>
          <p>Основатель и генеральный директор</p>
          <p class="member-bio">Инженер-конструктор с 15-летним опытом</p>
        </div>
        <div class="team-member">
          <div class="member-photo">
            <img
              :src="base + '/images/about/member2.webp'"
              alt="Мария Иванова"
            />
            <div class="member-social">
              <a href="#" class="social-link green-bg">in</a>
            </div>
          </div>
          <h3>Мария Иванова</h3>
          <p>Главный дизайнер</p>
          <p class="member-bio">Выпускница Scuola Politecnica di Design</p>
        </div>
        <div class="team-member">
          <div class="member-photo">
            <img
              :src="base + '/images/about/member3.webp'"
              alt="Дмитрий Смирнов"
            />
            <div class="member-social">
              <a href="#" class="social-link green-bg">in</a>
            </div>
          </div>
          <h3>Дмитрий Смирнов</h3>
          <p>Технический директор</p>
          <p class="member-bio">Эксперт в области эко-материалов</p>
        </div>
      </div>
    </section>

    <section class="cta-section green-bg">
      <div class="cta-content">
        <h2>Присоединяйтесь к 50 000 довольных клиентов!</h2>
        <div class="cta-buttons">
          <router-link to="/catalog" class="cta-btn">
            Выбрать мебель
            <i class="icon-arrow">→</i>
          </router-link>
          <router-link to="/contacts" class="cta-btn outline">
            Консультация дизайнера
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL;
</script>

<style scoped>
.about-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  color: #2c3e50;
}

section {
  margin: 6rem 0;
  padding: 0 1rem;
}

h2 {
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.hero {
  position: relative;
  padding: 8rem 2rem;
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
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  font-size: 1.4rem;
  opacity: 0.9;
}

.philosophy-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.green-bg {
  background: var(--green-primary);
}

.green-light-bg {
  background: var(--green-light-bg);
}

.philosophy-image img {
  margin-top: 40px;
  width: 100%;
  height: 500px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.highlight-text {
  font-size: 1.6rem;
  color: var(--green-primary);
  margin: 2rem 0;
  line-height: 1.4;
}

.philosophy-points {
  display: grid;
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.point-icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}
.principles {
  border-radius: 20px;
}

.principle-card {
  margin-bottom: 10px;
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: transform 0.3s ease;
}

.principle-card:hover {
  transform: translateY(-10px);
}

.icon-box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
}

.principle-list {
  list-style: none;
  padding: 0;
  text-align: left;
}

.principle-list li {
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;
}

.principle-list li:last-child {
  border-bottom: none;
}

.timeline {
  position: relative;
  padding: 4rem 0;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 100%;
  background: var(--green-primary);
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
}

.timeline-item:nth-child(even) {
  flex-direction: row-reverse;
  text-align: right;
}

.timeline-year {
  width: 100px;
  height: 100px;
  background: white;
  border: 3px solid var(--green-primary);
  color: var(--green-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 50%;
  margin: 0 2rem;
  position: relative;
  z-index: 1;
}

.timeline-content {
  flex: 1;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.timeline-badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  color: white;
  margin-top: 1rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
}

.team-member {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 20px;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-photo {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--green-primary);
}

.member-social {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.social-link {
  display: flex;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: white;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
}

.member-bio {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.cta-section {
  padding: 6rem 2rem;
  border-radius: 20px;
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  background: white;
  color: var(--green-primary);
}

.cta-btn.outline {
  background: transparent;
  border: 2px solid white;
  color: white;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@media (max-width: 1200px) {
  .philosophy-content {
    gap: 2rem;
  }
}

@media (max-width: 992px) {
  .philosophy-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .philosophy-image img {
    height: 400px;
  }

  .point-item {
    flex-direction: column;
    text-align: center;
  }

  .timeline::before {
    left: 30px;
  }

  .timeline-item {
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
  }

  .timeline-year {
    position: absolute;
    left: -85px;
    top: 0;
    width: 60px;
    height: 60px;
    font-size: 1.2rem;
  }

  .timeline-item:nth-child(even) {
    flex-direction: column;
    text-align: left;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 4rem 1rem;
  }

  h2 {
    font-size: 1.8rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .team-member {
    padding: 1.5rem;
  }

  .member-photo {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 576px) {
  .hero h1 {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .highlight-text {
    font-size: 1.2rem;
  }

  .timeline-content {
    padding: 1.5rem;
  }
}
</style>
