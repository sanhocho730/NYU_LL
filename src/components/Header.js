import React from "react";

function Header({ onSearch }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <div className="header-left">NYU COURSE GUIDE</div>
      <div className="header-right">
        <input
          className="search-bar"
          type="text"
          placeholder="Search by Course Name, Code Number, Professor..."
          onChange={handleSearchChange}
        />
        <button className="login-button">Login</button>
      </div>
    </header>
  );
}

export default Header;