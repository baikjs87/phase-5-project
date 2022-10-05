import { useLocation } from "react-router-dom"

function Details() {

    const location = useLocation()
    const review = location.state.review
    console.log(location.state.review)
    
    return(
        <div>
            <h1>{review.title}</h1>
            <div>
                <h5>Rating: {review.rating}</h5>
                <h5>Brand: {review.brand.name}</h5>
                <h5>Category: {review.category.name}</h5> 
                <h5>Price: ${review.price}</h5> 
                <h5>Recommend? {review.recommend}</h5> 
            </div>
            <div>
                <h5>Review</h5>
                <p>{review.description}</p>
            </div>
        </div>
    )
}

export default Details