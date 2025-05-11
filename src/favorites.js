import { auth } from "@/auth"

export function getFavorites() {
  if (!auth.currentUser) return []
  const data = localStorage.getItem(`favorites-${auth.currentUser.email}`)
  try {
    return data ? JSON.parse(data) : []
  } catch (e) {
    console.error("Ошибка при парсинге избранного:", e)
    return []
  }
}

export function saveFavorites(favorites) {
  if (!auth.currentUser) return
  try {
    localStorage.setItem(`favorites-${auth.currentUser.email}`, JSON.stringify(favorites))
  } catch (e) {
    console.error("Ошибка при сохранении избранного:", e)
  }
}

export function addToFavorites(product) {
  if (!auth.currentUser) return
  const favorites = getFavorites()
  if (!favorites.find((item) => item.id === product.id)) {
    favorites.push(product)
    saveFavorites(favorites)
  }
}

export function removeFromFavorites(productId) {
  if (!auth.currentUser) return
  const favorites = getFavorites().filter((item) => item.id !== productId)
  saveFavorites(favorites)
}

export function isInFavorites(productId) {
  if (!auth.currentUser) return false
  const favorites = getFavorites()
  return favorites.some((item) => item.id === productId)
}

export function clearFavorites() {
  if (!auth.currentUser) return
  localStorage.removeItem(`favorites-${auth.currentUser.email}`)
}
