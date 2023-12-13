// MinMaxFilterSlider.js
import React, { useState } from 'react';

const MinMaxFilterSlider = ({ customMin, customMax, onFilterChange }) => {
  const [range, setRange] = useState([customMin, customMax]);

  const handleMinChange = (event) => {
    const newMin = parseFloat(event.target.value);
    setRange([newMin, range[1]]);
  };

  const handleMaxChange = (event) => {
    const newMax = parseFloat(event.target.value);
    setRange([range[0], newMax]);
  };

  const handleApplyFilter = () => {
    onFilterChange(range);
  };

  return (
    <div className="min-max-filter-slider">
      <div className="range-label">
        Min: {range[0]} - Max: {range[1]}
      </div>
      <input
        type="range"
        min={customMin}
        max={customMax}
        value={range[0]}
        onChange={handleMinChange}
      />
      <input
        type="range"
        min={customMin}
        max={customMax}
        value={range[1]}
        onChange={handleMaxChange}
      />
      <div className="input-fields">
        <input
          type="number"
          value={range[0]}
          onChange={handleMinChange}
          min={customMin}
          max={range[1]}
        />
        <input
          type="number"
          value={range[1]}
          onChange={handleMaxChange}
          min={range[0]}
          max={customMax}
        />
      </div>
      <button onClick={handleApplyFilter}>Apply Filter</button>
    </div>
  );
};

export default MinMaxFilterSlider;
