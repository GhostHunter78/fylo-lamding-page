
const emailInput = document.querySelector(".inputJs");
const button = document.querySelector(".buttonJs");
const error = document.querySelector(".error");
const thanks = document.querySelector(".thanks");

button.addEventListener("click", hello);

function hello() {
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
}


const emailInput2 = document.querySelector ('.inputJs2')
const button2 = document.querySelector ('.buttonJs2')
const error2 = document.querySelector(".error2");
const thanks2 = document.querySelector(".thanks2");

button2.addEventListener("click", () => {
  const email2 = emailInput2.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const valid = emailRegex.test(email2)

  if (valid) {
    error2.style.display= "none"
    emailInput2.style.borderColor="green"
    thanks2.style.display="block"
  } else {
    error2.style.display="block"
    thanks2.style.display="none"
    emailInput2.style.borderColor="red"
  }
})