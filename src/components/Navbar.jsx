import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(search);

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="nav">
      <nav className="navbar" id="navbar">
        <h2>
          <Link to="/">themovie</Link>
        </h2>

        <form className="navbar__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search movie"
            className="navbar__input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit" className="navbar__button">
            <BiSearchAlt2 fontSize="large" />
          </button>
        </form>
      </nav>
      <div className="navbar__line"></div>
    </div>
  );
};

export default Navbar;
