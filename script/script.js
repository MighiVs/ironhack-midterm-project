/********************Nav-bar toggle feature**********************/
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-links");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
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