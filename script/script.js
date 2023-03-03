/********************Nav-bar toggle feature**********************/
const toggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav-links");

toggle.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
})
/****************************************************************/