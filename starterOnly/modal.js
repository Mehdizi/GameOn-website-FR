function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// regex for valid input
const regex_name = /^[A-Za-zÀ-ÿ- ]{2,25}$/;
const regex_email = /^[a-zA-ZÀ-ÿ0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,3}$/;
const regex_birthdate =
  /^(19[0-9][0-9]|20[0-9][0-9])(-)(0[1-9]|1[0-2])(-)(0[1-9]|[1-2][0-9]|3[0-1])$/;
const regex_quantity = /^[0-9]{1,2}$/;
// const regex_name = /[A-Za-zîï]/

// champ validation pour submit
let firstName_validation = false;
let lastName_validation = false;
let email_validation = false;
let birthdate_validation = false;
let quantity_validation = false;
let tournamentLocation_validation = false;
let userCondition_validation = false;

// DOM Elements
// const succes = document.querySelector(".modal-body");
const userCondition_error = document.querySelector(".userCondition_error");
const tournamentLocation = document.querySelectorAll("input[type=radio]");
const tournamentLocation_error = document.querySelector(".locationData_error");
const quantity = document.querySelector("#quantity");
const birthdate = document.querySelector("#birthdate");
const email = document.querySelector("#email");
const lastName = document.querySelector("#last");
const firstName = document.querySelector("#first");
const information = document.querySelector(".information");
const firstName_error = document.querySelector(".firstName_error");
const lastName_error = document.querySelector(".lastName_error");
const email_error = document.querySelector(".email_error");
const birthdate_error = document.querySelector(".birthdate_error");
const quantity_error = document.querySelector(".quantity_error");
const validation = document.getElementById("validation_form");
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalCloseCross = document.querySelector(".close");
const successPage = document.querySelector("#success");
const modalData = document.querySelector(".modal-body");
const inscriptionForm = document.querySelector("#inscriptionForm");
const successPageCloseBtn = document.querySelector("#successPageCloseBtn");

// Vérification que le submit est correct
// validation.addEventListener("click", valid_submit);

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// cross to close de formdata modal
modalCloseCross.addEventListener("click", closeModal);

// button to close the success page modal
successPageCloseBtn.addEventListener("click", closeModal);

// cross to close the success modal
// modalSuccessCloseBtn.addEventListener("click", closeSuccessModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close the modal with the close cross
function closeModal() {
  if ((successPage.style.display = "flex")) {
    successPage.style.display = "none";
    modalData.style.display = "block";
    modalbg.style.display = "none";
    firstName_validation = false;
    lastName_validation = false;
    email_validation = false;
    birthdate_validation = false;
    quantity_validation = false;
    tournamentLocation_validation = false;
    userCondition_validation = false;
  } else {
    modalbg.style.display = "none";
  }
}
// close the success modal with the close cross
// function closeSuccessModal() {
//   successPage.style.display = "none";
//   // modalbg.style.display = "none";
//   // modalData.style.display = "block";
// }
// close the modal with escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modalbg.style.display = "none";
  }
});

document.querySelector("#first").addEventListener("input", firstName_validator);
document.querySelector("#last").addEventListener("input", lastName_validator);

function firstName_validator(e) {
  if (e.currentTarget.value.match(regex_name)) {
    firstName.style.borderColor = "rgb(0, 255, 0)";
    firstName_error.style.color = "transparent";
    firstName_validation = true;
  } else {
    firstName_error.textContent =
      "Veuillez saisir un prénom entre 2 et 25 lettres";
    firstName_error.style.color = "rgb(255, 0, 0)";
    firstName.style.borderColor = "rgb(255, 0, 0)";
    firstName_validation = false;
  }
  // console.log(firstName_validation);
}

function lastName_validator(e) {
  if (e.currentTarget.value.match(regex_name)) {
    lastName_error.style.color = "transparent";
    lastName.style.borderColor = "rgb(0, 255, 0)";
    lastName_validation = true;
  } else {
    lastName_error.style.color = "rgb(255, 0, 0)";
    lastName.style.borderColor = "rgb(255, 0, 0)";
    lastName_validation = false;
  }
  // console.log(lastName_validation);
}

email.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_email)) {
    email_error.style.color = "transparent";
    email.style.borderColor = "rgb(0, 255, 0)";
    email_validation = true;
  } else {
    email.style.borderColor = "rgb(255, 0, 0)";
    email_error.style.color = "rgb(255, 0, 0)";
    email_validation = false;
  }
  // console.log(email_validation);
});

birthdate.addEventListener("change", (e) => {
  const actualDate = new Date();
  const user_birthDate = new Date(e.currentTarget.value);
  if (
    e.currentTarget.value.match(regex_birthdate) &&
    user_birthDate < actualDate
  ) {
    birthdate.style.borderColor = "rgb(0, 255, 0)";
    birthdate_error.style.color = "transparent";
    birthdate_validation = true;
  } else {
    birthdate_error.style.color = "rgb(255, 0, 0)";
    birthdate.style.borderColor = "rgb(255, 0, 0)";

    birthdate_validation = false;
  }
});

quantity.addEventListener("input", (e) => {
  if (e.currentTarget.value.match(regex_quantity)) {
    quantity_error.style.color = "transparent";
    quantity.style.borderColor = "rgb(0, 255,  0)";
    quantity_validation = true;
  } else {
    quantity_validation = false;
    quantity_error.textContent = "Veuillez sélectionner un nombre en 0 et 99";
    quantity_error.style.color = "rgb(255, 0, 0)";
    quantity.style.borderColor = "rgb(255, 0,  0)";
  }
});

tournamentLocation.forEach(function (location) {
  location.addEventListener("change", (e) => {
    if (e.currentTarget.checked === true) {
      tournamentLocation_validation = true;
      tournamentLocation_error.style.color = "transparent";
    } else {
      tournamentLocation_validation = false;
    }
  });
});

// Validation of user-condition selection
document.querySelector("#checkbox1").addEventListener("change", (e) => {
  if (e.currentTarget.checked === true) userCondition_validation = true;
  userCondition_error.style.color = "transparent";
});

document.querySelector(".btn-submit").addEventListener("click", (e) => {
  // console.log("submit");
  // console.log(firstName_validation);
  // console.log(lastName_validation);
  // console.log(email_validation);
  // console.log(birthdate_validation);
  // console.log(quantity_validation);
  // console.log(tournamentLocation_validation);
  // console.log(userCondition_validation);
  if (
    firstName_validation &&
    lastName_validation &&
    email_validation &&
    userCondition_validation &&
    quantity_validation &&
    birthdate_validation &&
    tournamentLocation_validation &&
    userCondition_validation
  ) {
    // Ici il faut afficher la page de succes d'inscription
    e.preventDefault();
    firstName.style.borderColor = "rgb(204, 204, 204)";
    lastName.style.borderColor = "rgb(204, 204, 204)";
    email.style.borderColor = "rgb(204, 204, 204)";
    birthdate.style.borderColor = "rgb(204, 204, 204)";
    quantity.style.borderColor = "rgb(204, 204, 204)";
    inscriptionForm.reset();
    modalData.style.display = "none";
    successPage.style.display = "flex";
    // ajouter une fonction .reset pour reset le formulaire
  }
  if (firstName_validation === false) {
    e.preventDefault();
    firstName_error.style.color = "rgb(255, 0, 0)";
    firstName.style.borderColor = "rgb(255, 0, 0)";
  }
  if (lastName_validation === false) {
    e.preventDefault();
    lastName_error.style.color = "rgb(255, 0, 0)";
    lastName.style.borderColor = "rgb(255, 0, 0)";
  }
  if (email_validation === false) {
    e.preventDefault();
    email_error.style.color = "rgb(255, 0, 0)";
    email.style.borderColor = "rgb(255, 0, 0)";
  }
  if (birthdate_validation === false) {
    e.preventDefault();
    birthdate_error.style.color = "rgb(255, 0, 0)";
    birthdate.style.borderColor = "rgb(255, 0, 0)";
  }
  if (quantity_validation === false) {
    e.preventDefault;
    quantity_error.style.color = "rgb(255, 0, 0)";
    quantity.style.borderColor = "rgb(255, 0, 0)";
  }
  if (tournamentLocation_validation === false) {
    e.preventDefault();
    tournamentLocation_error.style.color = "rgb(255, 0, 0)";
  }
  if (userCondition_validation === false) {
    e.preventDefault();
    userCondition_error.style.color = "rgb(255, 0, 0)";
  } else {
    e.preventDefault();
  }
});
