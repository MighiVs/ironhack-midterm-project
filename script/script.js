const SERVER_URL = "http://localhost:8000";

/********************Nav-bar toggle feature**********************/
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});
/****************************************************************/

/********************Scroll Up Feature************************** */
const scrollUpBtn = document.getElementById("scrollArrow");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "flex";
  } else {
    scrollUpBtn.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
scrollUpBtn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*****************************************************************/

/* JAVASCRIPT FUNCTIONALITY FOR THE WEBSITE */

/* Validation for CTA-SECTION subscription email */
if (
  window.location.href.includes("index.html") ||
  window.location.href.includes("project.html")
) {
  const ctaSubscription = document.getElementById("subscription");
  const emailInput = document.querySelector("#subscription input");

  ctaSubscription.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent the form from submitting

    // validate the email input
    if (!isValidEmail(emailInput.value)) {
      alert("Please enter a valid email address.");
      emailInput.value = "";
      return;
    }

    // if the email input is valid, display a success message
    alert("Email sent successfully!");
    emailInput.value = "";
  });
}

/***************/

/*** CONTACT FORM validation and other functionailities ***/

if (window.location.href.includes("contact.html")) {
  const contactForm = document.getElementById("contact-us");

  const nameInput = document.getElementById("name");
  const mailInput = document.querySelector(".emaildiv input");
  const phoneInput = document.getElementById("phone");
  const message = document.getElementById("message");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // If default html method for validation fails, we check email and phone
    // Name and message inputs will be free of checking, only "required"
    const errors = {};
    inputValidation(mailInput, phoneInput, errors);
    const valid = errorOutput(errors);

    if (valid) {
      saveContact(
        nameInput.value,
        mailInput.value,
        phoneInput.value,
        message.value
      );
      emptyContactForm(nameInput, mailInput, phoneInput, message);

      alert(
        "Thank you for contacting us! We have received your message and will get back to you as soon as possible."
      );
    }
  });
}
/********************************* */

/* AUX FUNCTIONS */

function isValidEmail(email) {
  // ensure that the input is not null or an empty string
  // validate the email using a regular expression (regex)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function inputValidation(mailInput, phoneInput, errors) {
  if (mailInput.value.trim() === "") {
    errors.email = "Email is required.";
  } else if (!isValidEmail(mailInput.value)) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneRegex = /^(\d{3}\s?\d{3}\s?\d{3})$/;
  if (phoneInput.value.trim() === "") {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(phoneInput.value)) {
    errors.phone = "Please enter a valid 9-digit phone number.";
  }
}

function errorOutput(errors) {
  if (Object.keys(errors).length > 0) {
    // Display errors to the user
    for (var error in errors) {
      alert(`Error in field "${error.toUpperCase()}": ${errors[error]}`);
    }
    return false;
  } else {
    // Allow the form to submit
    return true;
  }
}

function saveContact(name, email, phone, message) {
  const contact = {
    name,
    email,
    phone,
    message,
  };

  fetch(`${SERVER_URL}/contacts`)
    .then((response) => response.json())
    .then((data) => {
      const contacts = data.contacts || []; // get existing contacts, or start with an empty array
      contacts.push(contact); // add the new contact to the array
      return fetch(`${SERVER_URL}/contacts`, {
        method: "PUT", // PUT method:  to update the entire contacts array
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ contacts }), // send the updated contacts array back to the server
      });
    })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

function emptyContactForm(name, email, phone, message) {
  name.value = "";
  email.value = "";
  phone.value = "";
  message.value = "";
}

/*************** */
