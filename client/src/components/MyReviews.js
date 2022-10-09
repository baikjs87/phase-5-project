function MyReviews({ myReviews }) {
    return(
        <div>
            <h3>My Reviews</h3>
            <div>
                {myReviews.map((reviews) => (
                    <div>
                        {reviews}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyReviews