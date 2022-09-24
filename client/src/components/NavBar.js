import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css"

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <header class="header">
      <div>
        <Link to="/">Should I Get It</Link>
      </div>
      <div class="nav_buttons">
        {user ? (
          <div>
            <Link to="/post" id="post" class="buttons_after_login">Post</Link>
            <Link to="/favorites" id="favorites" class="buttons_after_login">My Favorites</Link>
            <button onClick={handleLogoutClick} class="buttons_after_login">Logout</button>
          </div>
        ) : (
          <>
            <Link to="/login" id="login">Login</Link>
            <Link to="/signup" id="signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
}

export default NavBar;
