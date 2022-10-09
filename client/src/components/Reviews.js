import { Link } from "react-router-dom";
import './styles/reviews.css'

function Reviews({ reviews, user }) {
    return(
        <div>
            {reviews.map((review) => (
                <div className="card" key={review.id}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <Link to={{pathname:`/details/${review.id}`, state:{review, user}}}>
                            <p className="card-text">{review.title}</p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reviews