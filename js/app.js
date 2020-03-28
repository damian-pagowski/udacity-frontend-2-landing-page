/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const nav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

sections.forEach(el => {
  let section_id = el.getAttribute("id");
  let nav_name = el.getAttribute("data-nav");
  let li = document.createElement("li");
  li.innerHTML = `<a fref="#${section_id}" class="menu__link">${nav_name}</a>`;

nav.appendChild(li);


});

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click
function scrollToSection(){

}
// Set sections as active
function setActive(){
    
}