// CONST TO VALIDATE THE EVENT SUBMIT
let firstNameValidation = false;
let lastNameValidation = false;
let emailValidation = false;
let birthdateValidation = false;
let quantityValidation = false;
let tournamentLocationValidation = false;
let userConditionValidation = false;

// GLOBAL CONST TO INTERACT WITH THE FORMULAR
const green = "rgb(0, 255, 0)";
const red = "rgb(255, 0, 0)";
const grey = "rgb(204, 204, 204)";
const transparent = "0";
const appear = "1";

// GLOBAL FUNCTION TO INTERACT WITH THE FORMULAR
function successData(elem, errorElem) {
  elem.style.borderColor = green;
  errorElem.style.opacity = transparent;
}

function errorData(elem, errorElem) {
  elem.style.borderColor = red;
  errorElem.style.opacity = appear;
}

function resetData(...elems) {
  elems.forEach((elem) => {
    elem.style.borderColor = grey;
  });
}

// REGEX TO VALIDATE INPUTS
const regex_name = /^(?=.{2,25}$)[A-Za-zÀ-ÿ]+(?:[- ][A-Za-zÀ-ÿ]+)?$/;
const regex_email = /^[a-zA-ZÀ-ÿ0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
const regex_birthdate =
  /^(19[0-9][0-9]|20[0-9][0-9])(-)(0[1-9]|1[0-2])(-)(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regex_quantity = /^[0-9]{1,2}$/;

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseCross = document.querySelector(".close");
const successPage = document.querySelector("#success");
const modalData = document.querySelector(".modal-body");
const inscriptionForm = document.querySelector("#inscriptionForm");
const successPageCloseBtn = document.querySelector("#successPageCloseBtn");

// FUNCTION FOR THE RESPONSIVE NAVBAR
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// LAUNCHE THE MODAL EVENT
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// CROSSE TO CLOSE THE FORMDATA MODAL
modalCloseCross.addEventListener("click", closeModal);

// BUTTON TO CLOSE THE SUCCESS PAGE MODAL
successPageCloseBtn.addEventListener("click", closeModal);

// LAUNCH THE MODAL FORM
function launchModal() {
  modalbg.style.display = "block";
}

// CLOSE THE MODAL WITH THE CROSS
function closeModal() {
  if (successPage.style.display === "flex") {
    successPage.style.display = "none";
    modalData.style.display = "block";
    modalbg.style.display = "none";
    firstNameValidation = false;
    lastNameValidation = false;
    emailValidation = false;
    birthdateValidation = false;
    quantityValidation = false;
    tournamentLocationValidation = false;
    userConditionValidation = false;
  } else {
    modalbg.style.display = "none";
  }
}

// CLOSE THE MODAL WITH ESCAPE BUTTON
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalbg.style.display = "none";
  }
});

// CONDITION FOR THE FORMDATA

// FIRSTNAME CONDITION
const firstName = document.querySelector("#first");
const firstNameError = document.querySelector(".firstNameError");

firstName.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_name)) {
    successData(firstName, firstNameError);
    firstNameValidation = true;
  } else {
    errorData(firstName, firstNameError);
    firstNameValidation = false;
  }
});

// LASTNAME CONDITION
const lastName = document.querySelector("#last");
const lastNameError = document.querySelector(".lastNameError");

lastName.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_name)) {
    successData(lastName, lastNameError);
    lastNameValidation = true;
  } else {
    errorData(lastName, lastNameError);
    lastNameValidation = false;
  }
});

// EMAIL CONDITION
const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");

email.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_email)) {
    successData(email, emailError);
    emailValidation = true;
  } else {
    errorData(email, emailError);
    emailValidation = false;
  }
});

// BIRTHDATE CONDITION
const birthdate = document.querySelector("#birthdate");
const birthdateError = document.querySelector(".birthdateError");

birthdate.addEventListener("change", (e) => {
  const actualDate = new Date();
  const user_birthDate = new Date(e.currentTarget.value);
  if (
    e.currentTarget.value.match(regex_birthdate) &&
    user_birthDate < actualDate
  ) {
    successData(birthdate, birthdateError);
    birthdateValidation = true;
  } else {
    errorData(birthdate, birthdateError);
    birthdateValidation = false;
  }
});

// QUANTITY CONDITION
const quantity = document.querySelector("#quantity");
const quantityError = document.querySelector(".quantityError");

quantity.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_quantity)) {
    successData(quantity, quantityError);
    quantityValidation = true;
  } else {
    errorData(quantity, quantityError);
    quantityValidation = false;
  }
});

// TOURNAMENT LOCATION CONDITION
const tournamentLocation = document.querySelectorAll("input[type=radio]");
const tournamentLocationError = document.querySelector(
  ".tournamentLocationError"
);

tournamentLocation.forEach(function (location) {
  location.addEventListener("change", (e) => {
    if (e.currentTarget.checked === true) {
      tournamentLocationValidation = true;
      tournamentLocationError.style.opacity = transparent;
    } else {
      tournamentLocationError.style.opacity = appear;
      tournamentLocationValidation = false;
    }
  });
});

// USER_CONDITION CONDITION
const userConditionError = document.querySelector(".userConditionError");

document.querySelector("#checkbox1").addEventListener("change", (e) => {
  if (e.currentTarget.checked === true) {
    userConditionValidation = true;
    userConditionError.style.opacity = transparent;
  } else {
    userConditionValidation = false;
    userConditionError.style.opacity = appear;
  }
});

// VALIDATION OF THE FORMULAR WITH THE SUBMIT BUTTON

const ButtonSubmit = document.querySelector(".btn-submit");

ButtonSubmit.addEventListener("click", (e) => {
  // PREVENT DEFAULT THE ENTIRE FONCTION TO NOT RESET THE PAGE
  e.preventDefault();
  if (
    // IF ALL CONDITION OF THE FORMDATA ARE TRUE
    firstNameValidation &&
    lastNameValidation &&
    emailValidation &&
    quantityValidation &&
    birthdateValidation &&
    tournamentLocationValidation &&
    userConditionValidation
  ) {
    // WHEN THE INSCRIPTION FORMDATA SUCCEED 1| Reset the formular 2|reset the css of the formular 3|Display the success message
    inscriptionForm.reset();
    resetData(firstName, lastName, email, birthdate, quantity);
    modalData.style.display = "none";
    successPage.style.display = "flex";
  }
  // IF THERE IS AN ERROR ON ONE CHAMP OF THE INSCRIPTION FORMDATA DO THE FUNCTION "errorData"
  if (firstNameValidation === false) {
    errorData(firstName, firstNameError);
  }
  if (lastNameValidation === false) {
    errorData(lastName, lastNameError);
  }
  if (emailValidation === false) {
    errorData(email, emailError);
  }
  if (birthdateValidation === false) {
    errorData(birthdate, birthdateError);
  }
  if (quantityValidation === false) {
    errorData(quantity, quantityError);
  }
  if (tournamentLocationValidation === false) {
    tournamentLocationError.style.opacity = appear;
  }
  if (userConditionValidation === false) {
    userConditionError.style.opacity = appear;
  }
});
