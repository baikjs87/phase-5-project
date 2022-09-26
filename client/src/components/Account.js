import './styles/account.css'

function Account({ user, setUser }) {

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    return(
        <div className="wrapper">
            <h3>My Account</h3>
            <button onClick={handleLogoutClick} className="logout">Logout</button>
        </div>
    )
}

export default Account