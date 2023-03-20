
import "./styles.css";
import loginImage from '../img/login.png';


interface User {
  username: string;
  password: string;
}

class UserAuth {
  private user: User;

  constructor(user: User) {
    this.user = user;
  }

  public login(username: string, password: string): boolean {
    if (username === this.user.username && password === this.user.password) {
      return true;
    }
    return false;
  }
}

let user1: User = {
  username: 'admin',
  password: 'admin',
};




let userAuth = new UserAuth(user1);

// LOGIN
function loginUser(): void {
  const userElement = document.getElementById("username") as HTMLInputElement;
  const passwordElement = document.getElementById("password") as HTMLInputElement;

  const username = userElement.value;
  const password = passwordElement.value;
 
  if (userAuth.login(username, password)) {
    ShowCustomPromptLogin();

    setTimeout(() => {
      window.location.href = "feed.html";
    }, 3000); // Wait for 3 seconds before navigating
  } else {
    alert("Incorrect User or Password");
  }
}

const loginButton = document.getElementById("submit-button");
loginButton?.addEventListener("click", (event) => {
  event.preventDefault();
  loginUser();
});


// Navigation: register
const registerButton = document.getElementById('register-button');
registerButton?.addEventListener( "click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";

}  )


// customPromptLogin.ts
function ShowCustomPromptLogin(): void {
  const imageElement = document.getElementById('login-image') as HTMLImageElement;
  const loginPromptContainer = document.getElementById('custom-prompt-login-container') as HTMLElement;

  if (imageElement) {
    imageElement.src = loginImage;
  }

  if (loginPromptContainer) {
    loginPromptContainer.style.display = "flex";
  }
}




