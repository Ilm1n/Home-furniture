import { reactive } from 'vue'

export const auth = reactive({
  currentUser: JSON.parse(localStorage.getItem('currentUser')) || null
})

export function register(name, email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');

  if (users.find(u => u.email === email)) {
    return 'Пользователь уже существует';
  }

  const newUser = { 
    name,
    email, 
    password, 
    createdAt: new Date().toISOString() 
  };

  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  
  return 'ok';
}

export function login(email, password) {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const user = users.find(u => 
    u.email.toLowerCase() === email.toLowerCase() && 
    u.password === password
  );

  if (user) {
    auth.currentUser = { 
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    };
    localStorage.setItem('currentUser', JSON.stringify(auth.currentUser));
    return 'ok';
  }

  return 'Неверный логин или пароль';
}

export function logout() {
  auth.currentUser = null
  localStorage.removeItem('currentUser')
}
