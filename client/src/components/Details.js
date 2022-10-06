import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import './styles/details.css'

function Details({ user }) {
    const location = useLocation()
    const review = location.state.review
    const [commentData, setCommentData] = useState({
        body:'',
        user_id: user.id,
        review_id: review.id
    })
    const [thisReview, setThisReview] = useState({})
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        setThisReview(review)
    },[])
    
    // console.log(review)
    // console.log('this: ',thisReview.brand)

    const handleChange = (e) => {
        const { name, value } = e.target
        setCommentData({ ...commentData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(commentData)
        
        fetch("/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
        }).then((r) => {
            if (r.ok) {
                r.json().then((comment) => {
                    console.log(comment)
                    setCommentData({ ...commentData, body:'' })
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    
    
    return(
        <div className="" id="wrapper">
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
                <div className="line"></div>
                <form id="form" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="mb-3">
                            {/* <label for="commentArea" className="form-label">Comments</label> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a comment..." value={commentData.body} name="body" onChange={handleChange}></textarea>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Post Comment</button>
                </form>
                <div id="comments">
                    {review.comments.map((comment) => 
                        <div className="card" id="comments-wrapper" key={comment.id}>
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