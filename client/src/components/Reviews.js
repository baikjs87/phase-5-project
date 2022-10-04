function Reviews({ reviews }) {
    return(
        <div>
            {reviews.map((review) => (
                <div className="card" key={review.id}>
                    {/* <img src="..." class="card-img-top" alt="..."> */}
                    <div className="card-body">
                        <p className="card-text">{review.title}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Reviews