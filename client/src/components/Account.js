import './styles/account.css'
import { useEffect, useState } from 'react';
import MyReviews from './MyReviews';
import MyComments from './MyComments';

function Account({ user, setUser }) {
    const [reviewsShown, setReviewsShown] = useState(false);
    const [commentsShown, setCommentsShown] = useState(false);
    const [myComments, setMyComments] = useState([])
    const [myReviews, setMyReviews] = useState([])
    // console.log("comments:", myComments)
    // console.log("reviews: ", myReviews)


    useEffect(() => {
        fetch(`/reviews/${user.id}`)
        .then((r) => {
              r.json().then((reviews) => {
                console.log(reviews)
                setMyReviews(reviews)});
          });

        fetch(`/comments/${user.id}`)
        .then((r) => {
              r.json().then((comments) => setMyComments(comments));
          });
    },[user.id])

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
      }

    const handleClickReview = event => {
      setReviewsShown(true);
      setCommentsShown(false);
    };

    const handleClickComments = event => {
      setCommentsShown(true);
      setReviewsShown(false);
    };

    return(
      <div className="account-wrapper">
        <div class="">
          <div class="sidebar">
            <small class="text-muted pl-3">MY ACCOUNT</small>
            <ul className="list">
              <li onClick={handleClickReview} className="links">My Reviews</li>
              <li onClick={handleClickComments} className="links">My Comments</li>
              <li className="logout" onClick={handleLogoutClick}>Log Out</li>
            </ul>
          </div>
        </div>
        <div className="account-body">
          <h3>Hello {user.username}</h3>
          <div className="line"></div>
        </div>
        <div className="account-subbody">
          {reviewsShown && (
            <MyReviews myReviews={myReviews} />
          )}
          {commentsShown && (
            <MyComments user={user} myComments={myComments} />
          )}
        </div>
      </div>
  )
}

export default Account