import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = ({ options, index, width, height }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select 
        value={selectedOption} 
        onChange={handleChange}
        style={{
          width: width,
          height: height
        }}
      >
        <option value="" disabled>
          {options[index]?.optionTitle || 'Select an option'}
        </option>
        {options[index]?.optionsList.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
