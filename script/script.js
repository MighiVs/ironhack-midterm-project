/********************Nav-bar toggle feature**********************/
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    overlay.style.display = overlay.style.display === "block" ? "none" : "block";
})
/****************************************************************/

/********************Scroll Up Feature************************** */
const scrollUpBtn = document.getElementById("scrollArrow");

window.onscroll = function () {
    scrollFunction();
  };

function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
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