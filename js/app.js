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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const ALL_SECTIONS = document.querySelectorAll('section');
const UL_MENU = document.querySelector('ul#navbar__list');

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
function buildMenu(){

 let docFragment = document.createDocumentFragment();
 ALL_SECTIONS.forEach((section) =>{
  let listElement = document.createElement("li");
  listElement.innerHTML =`<a href ="#${section.id}" class ="menu__link">${section.dataset.nav}</a>`;

  // Scroll to anchor ID using scrollTO event
    listElement.addEventListener('click',(event)=>{
    event.preventDefault();
    section.scrollIntoView({behavior: "smooth"});
    });

  docFragment.appendChild(listElement);
  });
 UL_MENU.appendChild(docFragment);

}



// Add class 'active' to section when near top of viewport

function setActiveSection(){

 ALL_SECTIONS.forEach((section) =>{
 let sectionTop = section.getBoundingClientRect().top;

 if(sectionTop>=0 && sectionTop<300 ){
 	
 	section.classList.add("your-active-class");
 	
 }
 
 else{
 	
 		section.classList.remove("your-active-class");
 }

 });
 

}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu

document.addEventListener("DOMContentLoaded",buildMenu);

// Scroll to section on link click


// Set sections as active

window.addEventListener("scroll",setActiveSection);
 
