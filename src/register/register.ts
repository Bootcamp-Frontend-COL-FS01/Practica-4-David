import "./register.css";

interface User {
  username: string;
  email: string;
  password: string;
}

let user1: User = {
  username: 'admin',
  email: 'admin@example.com',
  password: 'admin',
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPassword(password: string): boolean {
  // At least one lowercase letter, one uppercase letter, one digit, and one special character, with a minimum length of 8 characters
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function isUniqueUsername(username: string): boolean {
  const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  return users.every(user => user.username !== username);
}

function saveUserToLocalStorage(user: User): void {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  console.log("New user registered:", users)
}

const registerButton = document.getElementById('register-button')
registerButton?.addEventListener('click', (event) => {
  event.preventDefault();

  const username = (document.getElementById('username') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const password = (document.getElementById('password') as HTMLInputElement).value;
  const confirmPassword = (document.getElementById('confirm-password') as HTMLInputElement).value;

  if (!isUniqueUsername(username)) {
    alert('Username already exists. Please choose a different one.');
    return;
  }

  if (!isValidEmail(email)) {
    alert('Invalid email address. Please enter a valid email address.');
    return;
  }

  if (!isValidPassword(password)) {
    alert('Invalid password. It must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one digit, and one special character.');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match. Please re-enter your password.');
    return;
  }

  const newUser: User = {
    username,
    email,
    password,
  };

  saveUserToLocalStorage(newUser);

  alert('User registered');
  window.location.href = "feed.html";
});
