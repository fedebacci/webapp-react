import MovieReview from "./MovieReview";



export default function MovieReviewsList ({ reviews }) {
    return (
        <div className="movie-reviews card shadow my-3">
            <div className="card-body">
                <h2 className='text-center'>
                    MovieReviewsList
                </h2>

                 {/* key={review.id} */}

                {
                    reviews.length > 0 ?
                        reviews.map(review => {
                            return (
                                <MovieReview
                                    key={review.id}
                                    review={review}
                                />
                            )
                        })
                    :
                    <p>
                        No reviews found
                    </p>
                }
            </div>
        </div>
    );
};