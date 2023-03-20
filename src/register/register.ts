
import "./register.css";

interface User {
  username: string;
  password: string;
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
  const password = (document.getElementById('password') as HTMLInputElement).value;

  const newUser: User = {
    username,
    password,
  };

  saveUserToLocalStorage(newUser);

  alert('User registered');
  window.location.href = "feed.html";
});


