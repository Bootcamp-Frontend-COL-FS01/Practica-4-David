
import "./styles.css";

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

let user2 : User = {
  username: 'test',
  password: 'test',
}


let userAuth = new UserAuth(user1);
// let userAuth = new UserAuth(user2);

// LOGIN
function loginUser(): void {
  const userElement = document.getElementById("username") as HTMLInputElement;
  const passwordElement = document.getElementById("password") as HTMLInputElement;

  const username = userElement.value;
  const password = passwordElement.value;

  if (userAuth.login(username, password)) {
    alert('Logged In Sucesfully')
    window.location.href = "feed.html";
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