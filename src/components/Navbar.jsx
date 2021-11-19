import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { AuthTypes } from "../types/AuthTypes";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: AuthTypes.logout });

    history.replace("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container-fluid">
        <h1 className="navbar-brand ">DBZ App</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <NavLink className="nav-link" aria-current="page" to="/mens">
                Mens
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/womens">
                Womens
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/search">
                Search
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <button className="btn btn-dark" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
