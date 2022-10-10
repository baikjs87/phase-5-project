import './styles/account.css'
import { useEffect, useState } from 'react';
import MyReviews from './MyReviews';
import MyComments from './MyComments';

function Account({ user, setUser }) {
    const [reviewsShown, setReviewsShown] = useState(false);
    const [commentsShown, setCommentsShown] = useState(false);
    const [myComments, setMyComments] = useState([])
    const [myReviews, setMyReviews] = useState([])
    const [errors, setErrors] = useState([])

    console.log("comments:", myComments)
    // console.log("reviews: ", myReviews)


    useEffect(() => {
        fetch('/reviews')
        .then(r => {
          if(r.ok){
            r.json().then((reviews) => {
              const reviewsList = []
              reviews.map((review) => {
                if(review.user.id === user.id){
                  reviewsList.push(review)
                }
              })
              setMyReviews(reviewsList)
            });
          } else {
            r.json().then(json => setErrors(json.error))
          }
        });

        fetch('/comments')
        .then((r) => {
              r.json().then((comments) => {
                const commentsList = []
                comments.map((comment) => {
                  if(comment.user.id === user.id){
                    commentsList.push(comment)
                  }
                })
                setMyComments(commentsList)
              });
          });
    },[])

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          } else {
            r.json().then(json => setErrors(json.error))
          }
        });
      }

    const handleClickReviews = () => {
      setReviewsShown(true);
      setCommentsShown(false);
    };

    const handleClickComments = () => {
      setCommentsShown(true);
      setReviewsShown(false);
    };

    function handleUpdateComment(updatedComment){
      setMyComments((comments) => 
        comments.map((comment) => {
          return comment.id === updatedComment.id ? updatedComment : comment
        })
      ) 
    }
    
    function handleDeleteComment(deletedComment){
      setMyComments((comments) => 
        comments.filter((comment) => comment.id !== deletedComment.id)
      )
    }

    function handleUpdateReview(updatedReview){
      setMyReviews((reviews) =>
        reviews.map((review) => {
          return review.id === updatedReview.id ? updatedReview : review
        })
      )
    }

    function handleDeleteReview(deleteReview){
      setMyReviews((reviews) =>
        reviews.filter((review) => review.id !== deleteReview.id)
      )
    }

    return(
      <div className="account-wrapper">
        <div class="">
          <div class="sidebar">
            <small class="text-muted pl-3">MY ACCOUNT</small>
            <ul className="list">
              <li onClick={handleClickReviews} className="links">My Reviews</li>
              <li onClick={handleClickComments} className="links">My Comments</li>
              <li className="logout" onClick={handleLogoutClick}>Log Out</li>
            </ul>
          </div>
        </div>
        <div className="account-body">
          <h5>Hello {user.username}</h5>
        </div>
        <div className="account-subbody">
        {errors?<div style={{color:'red'}}>{errors}</div>:null}
          {reviewsShown && (
            <MyReviews user={user} 
            myReviews={myReviews}
            onUpdateReview={handleUpdateReview}
            onDeleteReview={handleDeleteReview} />
          )}
          {commentsShown && (
            <MyComments user={user} 
            myComments={myComments} 
            onUpdateComment={handleUpdateComment} 
            onDeleteComment={handleDeleteComment} />
          )}
        </div>
      </div>
  )
}

export default Account