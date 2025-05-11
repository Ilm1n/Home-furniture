<template>
    <div class="checkout-container">
      <div class="checkout-steps">
        <div :class="['step', { active: currentStep >= 1 }]">
          <span class="step-number">1</span>
          <span class="step-name">Контактные данные</span>
        </div>
        <div :class="['step', { active: currentStep >= 2 }]">
          <span class="step-number">2</span>
          <span class="step-name">Доставка</span>
        </div>
        <div :class="['step', { active: currentStep >= 3 }]">
          <span class="step-number">3</span>
          <span class="step-name">Оплата</span>
        </div>
        <div :class="['step', { active: currentStep >= 4 }]">
          <span class="step-number">4</span>
          <span class="step-name">Подтверждение</span>
        </div>
      </div>
  
      <div v-if="currentStep === 1" class="checkout-form">
        <h3 class="section-title">Контактная информация</h3>
        <div class="input-group">
          <input 
            type="text" 
            v-model="formData.firstName" 
            placeholder="Имя"
            required
          >
          <input 
            type="text" 
            v-model="formData.lastName" 
            placeholder="Фамилия"
            required
          >
        </div>
        <input 
          type="email" 
          v-model="formData.email" 
          placeholder="Email"
          required
        >
        <input 
          type="tel" 
          v-model="formData.phone" 
          placeholder="Телефон"
          required
        >
  
        <div class="form-actions">
          <button type="button" class="next-btn" @click="nextStep">
            Продолжить
          </button>
        </div>
      </div>
  
      <div v-else-if="currentStep === 2" class="checkout-form">
        <h3 class="section-title">Способ доставки</h3>
        
        <div class="delivery-options">
          <label 
            v-for="option in deliveryOptions" 
            :key="option.value"
            :class="['delivery-option', { active: formData.deliveryType === option.value }]"
          >
            <input 
              type="radio" 
              v-model="formData.deliveryType" 
              :value="option.value"
              @change="updateDeliveryPrice"
            >
            <div class="option-content">
              <span class="option-name">{{ option.name }}</span>
              <span class="option-price">{{ option.price }} ₽</span>
              <span class="option-desc">{{ option.description }}</span>
            </div>
          </label>
        </div>
  
        <div v-if="formData.deliveryType === 'courier'" class="address-fields">
          <h3 class="section-title">Адрес доставки</h3>
          <input 
            type="text" 
            v-model="formData.city" 
            placeholder="Город"
            required
          >
          <input 
            type="text" 
            v-model="formData.street" 
            placeholder="Улица"
            required
          >
          <div class="input-group">
            <input 
              type="text" 
              v-model="formData.house" 
              placeholder="Дом"
              required
            >
            <input 
              type="text" 
              v-model="formData.apartment" 
              placeholder="Квартира"
            >
          </div>
        </div>
  
        <div class="form-actions">
          <button type="button" class="back-btn" @click="prevStep">
            Назад
          </button>
          <button type="button" class="next-btn" @click="nextStep">
            Продолжить
          </button>
        </div>
      </div>
  
      <div v-else-if="currentStep === 3" class="checkout-form">
        <h3 class="section-title">Способ оплаты</h3>
        
        <div class="payment-options">
          <label 
            v-for="option in paymentOptions" 
            :key="option.value"
            :class="['payment-option', { active: formData.paymentMethod === option.value }]"
          >
            <input 
              type="radio" 
              v-model="formData.paymentMethod" 
              :value="option.value"
            >
            <div class="option-content">
              <span class="option-name">{{ option.name }}</span>
              <span class="option-icon">
                <img :src="option.icon" :alt="option.name">
              </span>
            </div>
          </label>
        </div>
  
        <div v-if="formData.paymentMethod === 'card'" class="card-details">
          <h3 class="section-title">Данные карты</h3>
          <input 
            type="text" 
            v-model="cardData.number" 
            placeholder="Номер карты"
            pattern="[0-9]{16}"
            required
          >
          <div class="input-group">
            <input 
              type="text" 
              v-model="cardData.expiry" 
              placeholder="ММ/ГГ"
              pattern="(0[1-9]|1[0-2])\/[0-9]{2}"
              required
            >
            <input 
              type="text" 
              v-model="cardData.cvv" 
              placeholder="CVV"
              pattern="[0-9]{3}"
              required
            >
          </div>
        </div>
  
        <div class="order-summary">
          <h3 class="summary-title">Ваш заказ</h3>
          <div class="order-items">
            <div v-for="item in cart" :key="item.id" class="order-item">
              <span class="item-name">{{ item.name }}</span>
              <span class="item-quantity">×{{ item.quantity }}</span>
              <span class="item-price">{{ item.price * item.quantity }} ₽</span>
            </div>
          </div>
          <div class="summary-row">
            <span>Товары:</span>
            <span>{{ cartTotal }} ₽</span>
          </div>
          <div class="summary-row">
            <span>Доставка:</span>
            <span>{{ deliveryPrice }} ₽</span>
          </div>
          <div class="summary-row total">
            <span>Итого:</span>
            <span>{{ totalPrice }} ₽</span>
          </div>
        </div>
  
        <div class="form-actions">
          <button type="button" class="back-btn" @click="prevStep">
            Назад
          </button>
          <button type="button" class="next-btn" @click="nextStep">
            Подтвердить заказ
          </button>
        </div>
      </div>
  
      <div v-else-if="currentStep === 4" class="order-confirmation">
        <div class="success-icon">
          <svg viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h2 class="success-title">Заказ успешно оформлен!</h2>
        <p class="success-text">Номер вашего заказа: <strong>#{{ orderId }}</strong></p>
        
        <div class="order-details">
          <h3>Детали заказа</h3>
          <div class="detail-row">
            <span>Способ доставки:</span>
            <span>{{ getDeliveryOption(formData.deliveryType).name }}</span>
          </div>
          <div v-if="formData.deliveryType === 'courier'" class="detail-row">
            <span>Адрес доставки:</span>
            <span>{{ deliveryAddress }}</span>
          </div>
          <div class="detail-row">
            <span>Способ оплаты:</span>
            <span>{{ getPaymentOption(formData.paymentMethod).name }}</span>
          </div>
          <div class="detail-row total">
            <span>Сумма заказа:</span>
            <span>{{ totalPrice }} ₽</span>
          </div>
        </div>
  
        <div class="success-actions">
          <router-link to="/catalog" class="continue-shopping">
            Продолжить покупки
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { getCart, clearCart } from '@/cart';
  
  const router = useRouter();
  const cart = ref(getCart());
  const currentStep = ref(1);
  const orderId = ref(null);
  const orderCompleted = ref(false);
  
  
  const formData = ref({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    deliveryType: 'courier',
    city: '',
    street: '',
    house: '',
    apartment: '',
    paymentMethod: 'card'
  });
  
  const cardData = ref({
    number: '',
    expiry: '',
    cvv: ''
  });
  
 
  const deliveryOptions = ref([
    {
      value: 'courier',
      name: 'Курьерская доставка',
      price: 500,
      description: 'Доставка в течение 1-3 дней'
    },
    {
      value: 'pickup',
      name: 'Самовывоз',
      price: 0,
      description: 'Бесплатно из нашего магазина'
    },
    {
      value: 'post',
      name: 'Почта России',
      price: 300,
      description: 'Доставка 5-10 дней'
    }
  ]);
  

  const paymentOptions = ref([
    {
      value: 'card',
      name: 'Картой онлайн',
      icon: '/Home-furniture/card.svg'
    },
    {
      value: 'cash',
      name: 'Наличными',
      icon: '/Home-furniture/cash.svg'
    },
    {
      value: 'invoice',
      name: 'По счету',
      icon: '/Home-furniture/invoice.svg'
    }
  ]);
  

  const cartTotal = computed(() => 
    cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );
  
  const deliveryPrice = computed(() => {
    const option = deliveryOptions.value.find(opt => opt.value === formData.value.deliveryType);
    return option ? option.price : 0;
  });
  
  const totalPrice = computed(() => cartTotal.value + deliveryPrice.value);
  
  const deliveryAddress = computed(() => {
    const { city, street, house, apartment } = formData.value;
    return `${city}, ${street}, д. ${house}${apartment ? ', кв. ' + apartment : ''}`;
  });
  

  function getDeliveryOption(value) {
    return deliveryOptions.value.find(opt => opt.value === value) || {};
  }
  
  function getPaymentOption(value) {
    return paymentOptions.value.find(opt => opt.value === value) || {};
  }
  
  function updateDeliveryPrice() {

  }
  
  function nextStep() {
    if (validateStep(currentStep.value)) {
      if (currentStep.value === 3) {
        submitOrder();
      } else {
        currentStep.value++;
      }
    }
  }
  
  function prevStep() {
    currentStep.value--;
  }
  
  function validateStep(step) {

    switch(step) {
      case 1:
        return formData.value.firstName && formData.value.email && formData.value.phone;
      case 2:
        if (formData.value.deliveryType === 'courier') {
          return formData.value.city && formData.value.street && formData.value.house;
        }
        return true;
      case 3:
        if (formData.value.paymentMethod === 'card') {
          return cardData.value.number && cardData.value.expiry && cardData.value.cvv;
        }
        return true;
      default:
        return true;
    }
  }
  
  function submitOrder() {

    orderId.value = Math.floor(Math.random() * 1000000);
    clearCart();
    currentStep.value++;
    orderCompleted.value = true;
  }
  </script>
  
  <style scoped>
  .checkout-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }
  
  .checkout-steps {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
    position: relative;
  }
  
  .checkout-steps::before {
    content: '';
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    z-index: 1;
  }
  
  .step {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .step-number {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e0e0e0;
    color: #95a5a6;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .step-name {
    color: #95a5a6;
    font-size: 0.9rem;
    text-align: center;
  }
  
  .step.active .step-number {
    background: var(--green-primary);
    color: white;
  }
  
  .step.active .step-name {
    color: #2c3e50;
    font-weight: 500;
  }
  
  .checkout-form {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  
  .section-title {
    color: #2c3e50;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
  
  .input-group {
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .input-group > * {
    flex: 1;
  }
  
  input, select {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  input:focus, select:focus {
    border-color: var(--green-primary);
    outline: none;
    box-shadow: 0 0 0 3px rgba(42, 157, 143, 0.1);
  }
  
  .delivery-options,
  .payment-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .delivery-option,
  .payment-option {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .delivery-option.active,
  .payment-option.active {
    border-color: var(--green-primary);
    background: rgba(42, 157, 143, 0.05);
  }
  
  .delivery-option input,
  .payment-option input {
    position: absolute;
    opacity: 0;
  }
  
  .option-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .option-name {
    font-weight: 500;
    color: #2c3e50;
  }
  
  .option-price {
    font-weight: bold;
    color: var(--green-primary);
  }
  
  .option-desc {
    display: block;
    font-size: 0.9rem;
    color: #7f8c8d;
    margin-top: 0.5rem;
  }
  
  .option-icon img {
    height: 24px;
  }
  
  .order-summary {
    margin-top: 2rem;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .order-items {
    margin-bottom: 1rem;
  }
  
  .order-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
  }
  
  .summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .summary-row.total {
    font-weight: bold;
    font-size: 1.1rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
  }
  
  .form-actions {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  
  .back-btn {
    padding: 0.8rem 1.5rem;
    background: none;
    border: 2px solid #95a5a6;
    color: #95a5a6;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .back-btn:hover {
    border-color: #7f8c8d;
    color: #2c3e50;
  }
  
  .next-btn {
    padding: 0.8rem 2.5rem;
    background: var(--green-primary);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .next-btn:hover {
    background: var(--green-dark);
  }
  
  .order-confirmation {
    text-align: center;
    padding: 3rem 2rem;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  }
  
  .success-icon {
    width: 80px;
    height: 80px;
    background: var(--green-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }
  
  .success-icon svg {
    width: 40px;
    height: 40px;
    fill: white;
  }
  
  .success-title {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .success-text {
    font-size: 1.1rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
  }
  
  .order-details {
    text-align: left;
    max-width: 500px;
    margin: 2rem auto;
    padding: 1.5rem;
    background: #f8f9fa;
    border-radius: 8px;
  }
  
  .order-details h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  }
  
  .detail-row.total {
    font-weight: bold;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #ddd;
  }
  
  .success-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
  }
  
  .continue-shopping {
    padding: 0.8rem 1.5rem;
    background: var(--green-primary);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .continue-shopping:hover {
    background: var(--green-dark);
  }
  
  .view-orders {
    padding: 0.8rem 1.5rem;
    background: none;
    border: 2px solid var(--green-primary);
    color: var(--green-primary);
    text-decoration: none;
    border-radius: 8px;
    transition: all 0.3s ease;
  }
  
  .view-orders:hover {
    background: rgba(42, 157, 143, 0.1);
  }
  
  @media (max-width: 768px) {
    .checkout-steps {
      flex-wrap: wrap;
      gap: 1rem;
    }
    
    .step {
      flex: 1 0 100px;
    }
    
    .input-group {
      flex-direction: column;
    }
    
    .success-actions {
      flex-direction: column;
    }
    
    .continue-shopping,
    .view-orders {
      width: 100%;
      text-align: center;
    }
  }
  </style>