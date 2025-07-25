import './styles.css';
import { createHomepage } from './home.js';
import { createMenu } from './menue.js';
import { createAbout } from './about.js';

alert("JavaScript is running! Welcome to Bella Vista Restaurant!");

// Load the homepage when the page first loads
createHomepage();

// Tab switching logic
function initializeTabSwitching() {
    const homeBtn = document.getElementById('homeButton');
    const menuBtn = document.getElementById('menuButton');
    const aboutBtn = document.getElementById('AboutButton');

    // Remove active class from all buttons
    function clearActiveButtons() {
        homeBtn.classList.remove('active');
        menuBtn.classList.remove('active');
        aboutBtn.classList.remove('active');
    }
    
    // Home tab
    homeBtn.addEventListener('click', () => {
        clearActiveButtons();
        homeBtn.classList.add('active');
        createHomepage();
    });
    
    // Menu tab
    menuBtn.addEventListener('click', () => {
        clearActiveButtons();
        menuBtn.classList.add('active');
        createMenu();
    });
    
    // About tab
    aboutBtn.addEventListener('click', () => {
        clearActiveButtons();
        aboutBtn.classList.add('active');
        createAbout();
    });
    
    // Set home button as active by default
    homeBtn.classList.add('active');
}

// Initialize tab switching when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTabSwitching);