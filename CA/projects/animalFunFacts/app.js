// Task 1: Import React and createRoot, animals object already imported
import { animals } from './animals.js';
import React from 'react';
import { createRoot } from 'react-dom/client';

// Task 2: Get reference to HTML element with id and store in container constant
// Note: Check your index.html file for the actual ID - it might be 'app' instead of 'root'
const container = document.getElementById('app') || document.getElementById('root');

// Task 3: Create React root using createRoot() method
const root = createRoot(container);

// Task 4: Create title constant (empty string) and animalFacts constant with JSX
const title = '';

// Task 14: Create showBackground constant to control background display
const showBackground = true;

// Task 7: Create background constant with img element and attributes
const background = <img className="background" alt="ocean" src="/images/ocean.jpg" />;

// Task 11: Create displayFact function to handle click events and show random facts
function displayFact(e) {
  const animal = e.target.alt;
  const facts = animals[animal].facts;
  const randomIndex = Math.floor(Math.random() * facts.length);
  const funFact = facts[randomIndex];
  
  // Task 13: Use document.getElementById to grab p element and change innerHTML
  document.getElementById('fact').innerHTML = funFact;
}

// Task 9: Use for...in loop to create array of animal images
const images = [];
for (const animal in animals) {
  images.push(
    <img 
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact} // Task 13: Add onClick event listener
    />
  );
}

// Task 4: Create animalFacts JSX expression
// Task 5: Use ternary operator for default title
// Task 8: Wrap in div tags and include background
// Task 10: Add div with className 'animals' and inject images array
// Task 12: Add empty p element with id 'fact'
// Task 14: Use && operator to conditionally show background
const animalFacts = (
  <div>
    <h1>{title || 'Click an animal for a fun fact'}</h1>
    {showBackground && background}
    <div className="animals">
      {images}
    </div>
    <p id="fact"></p>
  </div>
);

// Task 6: Call root's render() method with animalFacts
root.render(animalFacts);
