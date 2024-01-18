// Custom.js
import React from 'react';
import './Custom.css';

const Custom = () => {
  return (
    <div className="custom-container">
      <div className="custom-content">
        <h2>Custom Page</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla dapibus felis ut varius tincidunt. Sed auctor ante vitae 
          neque fermentum, eu laoreet mi ultricies. Vestibulum auctor, 
          sapien nec ultricies gravida, purus justo interdum mi, vel facilisis 
          enim tellus vitae urna.
        </p>
        <div className="animated-box">
          <p className="animated-text">Custom Animation</p>
        </div>
        <button className="animated-button">Click Me</button>
      </div>
    </div>
  );
};

export default Custom;
