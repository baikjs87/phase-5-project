import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

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
          // <Link to="/post" id="post">Post</Link>
          <button onClick={handleLogoutClick}>Logout</button>
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
