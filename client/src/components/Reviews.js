import { Link } from "react-router-dom";
import './styles/reviews.css'

function Reviews({ reviews, user }) {

    return(
        <div className="row row-cols-sm-4 row-cols-md-4 g-4" data-masonry='{"percentPosition": true }'>
            {reviews.map((review) => (
                <div className="col">
                    <div className="card" key={review.id}>
                        <Link to={{pathname:`/details/${review.id}`, state:{review, user}}}>
                            <img src={review.image_url} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">{review.title}</h5>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reviews