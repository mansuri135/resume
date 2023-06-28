import React, { useState, useEffect } from 'react';

function Tabs({ filterCategory, tabsData }) {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (category, index) => {
    setActiveButtonIndex(index);
    filterCategory(category);
  };

  useEffect(() => {
    // Add "active" class to the first button when the component mounts
    const buttons = document.getElementsByClassName("filterButton");
    if (buttons.length > 0) {
      buttons[0].classList.add("active");
    }
  }, []);

  return (
    <div className="text-center my-4">
      {tabsData.map((category, index) => (
        <button
          type="button"
          className={`filterButton mx-2 text-capitalize${activeButtonIndex === index ? ' active' : ''}`}
          onClick={() => handleButtonClick(category, index)}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Tabs;
