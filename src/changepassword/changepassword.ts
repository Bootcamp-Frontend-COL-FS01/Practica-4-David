import "./changepassword.css";

document.addEventListener("DOMContentLoaded", () => {
  const changePasswordForm = document.getElementById(
    "change-password-form"
  ) as HTMLFormElement;

  changePasswordForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const firstname = (document.getElementById("firstname") as HTMLInputElement)
      .value;
    const lastname = (document.getElementById("lastname") as HTMLInputElement)
      .value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const newPassword = (document.getElementById(
      "new-password"
    ) as HTMLInputElement).value;
    const confirmPassword = (document.getElementById(
      "confirm-password"
    ) as HTMLInputElement).value;

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    const user = {
      firstname,
      lastname,
      email,
      password: newPassword,
    };

    localStorage.setItem("user", JSON.stringify(user));
    alert("Password changed successfully!");
  });

  const backToFeedButton = document.getElementById("back-to-feed") as HTMLElement;

  backToFeedButton.addEventListener("click", () => {
    window.location.href = "feed.html"; 
  });
});

