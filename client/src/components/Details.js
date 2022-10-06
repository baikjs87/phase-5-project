import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import './styles/details.css'

function Details() {
    const [user, setUser] = useState('')

    const location = useLocation()
    const review = location.state.review
    console.log(review)
    // console.log(user)

    // useEffect(()=> {
    //     fetch("/users", {
    //         method: "POST",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify({ 'id':  }),
    //       }).then((r) => {
    //         if (r.ok) {
    //           r.json().then((user) => setUser(user));
    //         } else {
    //           r.json().then(json => setErrors(json.error))
    //         }
    //       });
    // },[])
  
    
    return(
        <div className="card" id="wrapper">
            <div className="card-body">
                <h1>{review.title}</h1>
                <div>
                    <h5>Rating: {review.rating}</h5>
                    <h5>Brand: {review.brand.name}</h5>
                    <h5>Category: {review.category.name}</h5> 
                    <h5>Price: ${review.price}</h5> 
                    <h5>Recommend? {review.recommend}</h5> 
                </div>
                <div id="review-wrapper">
                    <div>
                        <h5>Review</h5>
                        <p>{review.description}</p>
                    </div>
                </div>
                <form id="form">
                    <div class="mb-3">
                        <div class="mb-3">
                            <label for="commentArea" class="form-label">Comments</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <div id="comments">
                    {review.comments.map((comment) => 
                        <div className="card" id="comments-wrapper">
                            <div className="card-header">
                                {comment.user.username}
                            </div>
                            <div className="card-body">
                                <p key={comment.id} className="card-text">
                                    {comment.body}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Details