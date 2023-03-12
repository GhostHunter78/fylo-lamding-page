"use strict";

const loginButton = document.querySelector(".login-div");
const emailInput = document.querySelector(".enter-email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginButton.addEventListener("click", function () {
  const email = emailInput.value;

  if (emailRegex.test(email)) {
    const user = {
      email: email,
    };
  } else {
    loginButton.style.backgroundColor = "red";
    loginButton.style.color = "white";
    loginButton.textContent = "Please check your email";
  }
});
