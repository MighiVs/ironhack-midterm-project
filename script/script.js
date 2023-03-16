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
    cleanErrors(); 
    // If default html method for validation fails, we check email and phone
    // Name and message inputs will be free of checking, only "required"
    const errors = {};
    inputValidation(mailInput, phoneInput, message, errors);
    const valid = errorOutput(errors);

    if (valid) {
      saveContact(
        nameInput.value,
        mailInput.value,
        phoneInput.value,
        message.value
      );
      emptyContactForm(nameInput, mailInput, phoneInput, message);
      cleanErrors();
      alert(
        "Thank you for contacting us! We have received your message and will get back to you as soon as possible."
      );
    }
  });
}
/********************************* */

/* AUX FUNCTIONS */

function isValidEmail(email) {
  // validate the email using a regular expression (regex)
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
}

function isValidMessage(message) {
  // Validate message is not longer than 250 characters
  if (message.length > 250) {
    return false;
  } else {
    return true;
  }
}

function isValidPhone(phone) {
  const phoneRegex = /^(\d{3}\s?\d{3}\s?\d{3})$/;
  return phoneRegex.test(phone);
}

function showErrors(errors) {
  for (var error in errors) {
    if (error === "email") {
      const mailErrMsg = document.getElementById("error-email");
      mailErrMsg.innerHTML = errors[error];
    }
    if (error === "phone") {
      const phoneErrMsg = document.getElementById("error-phone");
      phoneErrMsg.innerHTML = errors[error];
    }
    if (error === "message") {
      const messageErrMsg = document.getElementById("error-message");
      messageErrMsg.innerHTML = errors[error];
    }
  }
}

function cleanErrors() {
  const errors = document.querySelectorAll("#contact-us span");
  errors.forEach((error) => (error.innerHTML = ""));
}

function inputValidation(mailInput, phoneInput, messageInput, errors) {
  if (mailInput.value.trim() === "") {
    errors.email = "Email is required.";
  } else if (!isValidEmail(mailInput.value)) {
    errors.email = "Please enter a valid email address.";
  }

  const phoneRegex = /^(\d{3}\s?\d{3}\s?\d{3})$/;
  if (phoneInput.value.trim() === "") {
    errors.phone = "Phone number is required.";
  } else if (!isValidPhone(phoneInput.value)) {
    errors.phone = "Please enter a valid 9-digit phone number.";
  }

  if (!isValidMessage(messageInput.value)) {
    errors.message = "Message exceeds length limit (250 characters)";
  }
}

// Boolean function that returns true if there are no errors, false otherwise
// If there are errors, display them
function errorOutput(errors) {
  if (Object.keys(errors).length > 0) {
    // Display errors to the user
    showErrors(errors);
    return false;
  } else {
    // Allow the form to submit
    return true;
  }
}

// Functionality for JSON SERVER
// Sending contact info and saving it into the "server"
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
