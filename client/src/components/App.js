import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Login from "./Login";
import NavBar from "./NavBar";
import Home from "./Home";
import Post from "./Post"
import Favorites from "./Favorites";
import Account from "./Account";
import Details from "./Details";
import "./styles/app.css"

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([])
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
  

  useEffect(() => {
    fetch('/reviews')
    .then(r => {
      if(r.ok){
        r.json().then((reviews)=>setReviews(reviews))
      }else{
        r.json().then(data => setErrors(data.error))
      }
    })
  },[])

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function addReview(review){
    console.log(review)
    setReviews((reviews) => [...reviews, review])
  }

  function handleNewComment(newComment){
    reviews.map((review) => review.id === newComment.review.id ? review.comments.push(newComment) : null)
  }

  return (
    <>
    {loading === false ? (
      <div className="app_wrapper">
        <NavBar user={user} setUser={setUser} />
        <main>
        {errors?<div style={{color:'red'}}>{errors}</div>:null}
          {user ? (
            <Switch>
              <Route path="/post">
                <Post user={user} addReview={addReview} />
              </Route>
              <Route path="/favorites">
                <Favorites user={user}/>
              </Route>
              <Route path="/details/:id">
                <Details user={user} reviews={reviews} addNewComment={handleNewComment} />
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
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
