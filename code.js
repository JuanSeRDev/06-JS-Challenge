const button = document.querySelector(".button") // seleccion del submit
const email = document.querySelector(".email") // seleccion de el input email
const error = document.querySelector(".error") // seleccion de <p class="error">

const validate = ()=>{
    if (email.value.indexOf("@") === -1 ||email.value.indexOf(".") === -1 || email.value.indexOf("com") === -1) {
        error.style.display = "flex"
        email.style.border = "1px solid var(--Light-Red)"
        email.value = ""
        return false
    } else {
        error.style.display = "none"
        email.style.border = "1px solid var(--Gray)"
        email.value = ""
        return true
    }
}

button.addEventListener("click", ()=>{
    const isValid = validate()
    if (!isValid) {
        return
    }
})