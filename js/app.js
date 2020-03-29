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

// Build menu
const createMenuItem = el => {
  let section_id = el.getAttribute("id");
  let nav_name = el.getAttribute("data-nav");
  let li = document.createElement("li");
  li.innerHTML = `<a  data-link=${section_id} class="menu__link">${nav_name}</a>`;
  li.addEventListener("click", () => scrollToSection(el));
  nav.appendChild(li);
};

const removeActiveClassFromSections = () =>
  sections.forEach(el => el.classList.remove("your-active-class"));

const removeActiveClassFromMenuItems = () =>
  document
    .querySelectorAll(".menu__link")
    .forEach(el => el.classList.remove("active"));

// Scroll to section on link click
const scrollToSection = elmnt => {
  elmnt.scrollIntoView();
};

const setSectionActive = active => {
  active.classList.add("your-active-class");
};

const setCorrespondingMenuItemActive = active => {
  let section_id = active.getAttribute("id");
  const menuItem = document.querySelector(`[data-link="${section_id}"]`);
  menuItem.classList.add("active");
};

// Set section and corresponding menu item active
const onScrollHandler = () => {
  let active = null;

  sections.forEach(elmnt => {
    const rect = elmnt.getBoundingClientRect();
    const dist = rect.top;
    const treshold = 300;
    if (dist < treshold) {
      active = elmnt;
    }
  });

  removeActiveClassFromSections();
  removeActiveClassFromMenuItems();
  if (active) {
    setSectionActive(active);
    setCorrespondingMenuItemActive(active);
  }
};

// build the nav

sections.forEach(el => {
  createMenuItem(el);
});

window.addEventListener("scroll", onScrollHandler);
