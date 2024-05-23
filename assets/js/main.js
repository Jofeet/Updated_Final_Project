/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===============  MENU SHOW ===============*/
if(navToggle){
    // Add an event listener for the 'click' event to the "nav-toggle" element
    navToggle.addEventListener('click', () =>{
        // Show the menu by adding the "show-menu" class to the "nav-menu" element
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
if(navClose){
    // Add an event listener for the 'click' event to the "nav-close" element
    navClose.addEventListener('click', () =>{
        // Hide the menu by removing the "show-menu" class from the "nav-menu" element
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Select all the elements with the class "nav__link"
const navLink = document.querySelectorAll('.nav__link')
// Define a function to be called when a link is clicked
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class//
    navMenu.classList.remove('show-menu')
}
// Add a click event listener to each element with the class "nav__link"
navLink.forEach(n => n.addEventListener('click, linkAction'))

/*=============== ADD BLUR TO HEADER ===============*/
// Define a function to be called when the user scrolls
const scrollHeader = () =>{
    // Select the element with the ID "header"
    const header = document.getElementById('header')
    // Check if the scroll position is greater than or equal to 50
  this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')       
}
// Add a scroll event listener to the "window" object
window.addEventListener('scroll, blurHeader')