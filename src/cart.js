import { auth } from "@/auth";

export function getCart() {
  const cartData = localStorage.getItem(`cart-${auth.currentUser.email}`);
  try {
    return cartData ? JSON.parse(cartData) : [];
  } catch (e) {
    console.error("Ошибка при парсинге корзины:", e);
    return [];
  }
}

export function saveCart(cart) {
  try {
    localStorage.setItem(`cart-${auth.currentUser.email}`, JSON.stringify(cart));
  } catch (error) {
    console.error("Ошибка при сохранении корзины:", error);
  }
}

export function addToCart(product) {
  const cart = getCart();
  const existingProduct = cart.find(item => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(`cart-${auth.currentUser.email}`);
}
