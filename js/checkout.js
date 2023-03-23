//Variables for all the form and error messages
const form = document.querySelector("form");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const surname = document.querySelector("#surname");
const surnameError = document.querySelector("#surnameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const phone = document.querySelector("#phonenumber");
const phoneError = document.querySelector("#phoneError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const state = document.querySelector("#state");
const stateError = document.querySelector("#stateError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const button = document.querySelector("checkout-button");


// Function for the disabled button//
function isButtonDisabled() {
    // validate the input data
    if (checkLength(firstName.value, 1) && checkLength(surname.value, 1)
    && validateEmail(email.value) && checkLength(phonenumber.value, 10)
    && checkLength(city.value, 1) && checkLength(address.value, 20) 
    && checkLength(state.value, 1) && checkLength(zip.value, 4)) {
        button.disabled = false;
    } else {
        message.innerHTML = "";
        button.disabled = true;
    }
}

function submitForm(event) {
    event.preventDefault();
 
// checking the input or an error message will show
if (checkLength(firstName.value, 1) === true) {
    firstNameError.style.display = "none";
} else {
    firstNameError.style.display = "block";
}

if (checkLength(surname.value, 1) === true) {
    surnameError.style.display = "none";
} else {
    surnameError.style.display = "block";
}

if (checkLength(address.value, 25) === true) {
    addressError.style.display = "none";
} else {
    addressError.style.display = "block";
}

if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
} else {
    subjectError.style.display = "block";
}

if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
} else {
    emailError.style.display = "block";
}

console.log("U are the best")
}




firstName.addEventListener("keyup", isButtonDisabled);
surname.addEventListener("keyup", isButtonDisabled);
address.addEventListener("keyup", isButtonDisabled);
email.addEventListener("keyup", isButtonDisabled);


form.addEventListener("submit", submitForm);


//Check if the input matches the criterias
function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}


//check if its a valid email
function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}