// Importing the necessary modules
import { createHomePage } from "./home.js";
import { createAboutPage } from "./about.js";
import { createMenuPage } from "./menu.js";
import { createContactPage } from "./contact.js";

// Getting reference to the content div
const content = document.querySelector("#content");

// Function to clear all content from the content div
function clearContent() {
  content.innerHTML = "";
}

// Function to load a specific page
function loadPage(pageFunction) {
  clearContent();
  content.appendChild(pageFunction());
}

function initializeTabSwitching() {
  // Adding event listeners to nav buttons
  const homeBtn = document.querySelector("#home");
  const menuBtn = document.querySelector("#menu");
  const aboutBtn = document.querySelector("#about");
  const contactBtn = document.querySelector("#contact");

  // Add click event listeners to the buttons
  homeBtn.addEventListener("click", () => loadPage(createHomePage));
  menuBtn.addEventListener("click", () => loadPage(createMenuPage));
  aboutBtn.addEventListener("click", () => loadPage(createAboutPage));
  contactBtn.addEventListener("click", () => loadPage(createContactPage));
}

// Initialize the page and load the home page by default

function init() {
  // Set up tab switching
  initializeTabSwitching();
  // Load the home page by default
  loadPage(createHomePage);
}

// Start the application
init();
