import { Link } from "react-router-dom";

function Reviews({ reviews }) {
    return(
        <div>
            {reviews.map((review) => (
                <div className="card" key={review.id}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <Link to={{pathname:`/details/${review.id}`, state:{review}}}>
                            <p className="card-text">{review.title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reviews