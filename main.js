const form = document.querySelector("form")
const errorMessage = document.querySelector(".error-email")
const email = document.querySelector("input")

const subscribeBtn = document.querySelector(".subscribe")
const dismissBtn = document.querySelector(".dismiss")

const successState = document.querySelector(".success-state")
const main = document.querySelector("main")

const customerEmail = document.querySelector("strong")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateEmail(email.value)) {
        errorMessage.classList.add("hide")
        email.classList.remove("error")

        main.classList.add("hide")
        successState.classList.remove("hide")

        customerEmail.innerText = email.value
        
    }
    else {
        errorMessage.classList.remove("hide")
        email.classList.add("error")
    }

})

dismissBtn.addEventListener("click", () => {
    successState.classList.add("hide");
    main.classList.remove("hide")
})

function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }