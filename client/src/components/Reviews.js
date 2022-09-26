function Reviews({ reviews }) {
    return(
        <div>
            {reviews.map((review) => {
                console.log(review)
            })}
        </div>
    )
}

export default Reviews