import React from "react";

function FilterControls({ schools, onSchoolChange }) {
  const handleSchoolChange = (e) => {
    onSchoolChange(e.target.value);
  };

  return (
    <div className="filter-controls">
      <label htmlFor="schoolSelect">School:</label>
      <select id="schoolSelect" onChange={handleSchoolChange}>
        <option value="">All</option>
        {schools.map((school) => (
          <option key={school} value={school}>
            {school}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterControls;