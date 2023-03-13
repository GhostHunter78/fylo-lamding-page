// "use strict";

// const loginButton = document.querySelector(".login-div");
// const emailInput = document.querySelector(".enter-email");
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// loginButton.addEventListener("click", function () {
//   const email = emailInput.value;

//   if (emailRegex.test(email)) {
//     const user = {
//       email: email,
//     };
//   } else {
//     loginButton.style.backgroundColor = "red";
//     loginButton.style.color = "white";
//     loginButton.textContent = "Please check your email";
//   }
// });

const emailInput = document.querySelector(".inputJs");
const button = document.querySelector(".buttonJs");
const error = document.querySelector(".error");
const thanks = document.querySelector(".thanks");

button.addEventListener("click", () => {
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email);

  if (valid) {
    emailInput.style.borderColor = "green";
    thanks.style.display = "block";
    error.style.display = "none";
  } else {
    emailInput.style.borderColor = "red";
    error.style.display = "block";
    thanks.style.display = "none";
  }
});
