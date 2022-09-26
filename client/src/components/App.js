import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Post from "./Post"
import Favorites from "./Favorites";
import Account from "./Account";
import "./styles/app.css"

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState('')

  useEffect(() => {
    fetch('/reviews')
    .then(r => {
      if(r.ok){
        r.json().then(setReviews)
      }else{
        r.json().then(data => setErrors(data.error))
      }
    })
  })

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function addReview(review){
    setReviews(current => [...current, review])
  }

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <main className="body_wrapper">
        {user ? (
          <Switch>
            <Route path="/post">
              <Post user={user} addReview={addReview} />
            </Route>
            <Route path="/favorites">
              <Favorites user={user}/>
            </Route>
            <Route path="/account">
              <Account user={user} setUser={setUser} />
            </Route>
            <Route path="/">
              <Home user={user} reviews={reviews} />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup">
              <SignUp setUser={setUser} />
            </Route>
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        )}
      </main>
    </div>
  );
}

export default App;
