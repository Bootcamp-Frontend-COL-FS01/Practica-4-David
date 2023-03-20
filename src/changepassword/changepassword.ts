import "./changepassword.css";

// document.addEventListener("DOMContentLoaded", (event) => {
//   event.preventDefault();
//   const changePasswordButton = document.getElementById(
//     "change-password-button-id"
//   ) as HTMLInputElement;
//   changePasswordButton?.addEventListener("click", (event) => {
//     event.preventDefault();
//     window.location.href = "./changepassword.html";
//   });
// });


const changePasswordButton = document.getElementById('change-password-button-id');
changePasswordButton?.addEventListener( "click", (event) => {
  event.preventDefault();
  window.location.href = "register.html";

}  )
