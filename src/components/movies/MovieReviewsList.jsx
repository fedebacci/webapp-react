import MovieReview from "./MovieReview";



export default function MovieReviewsList ({ reviews }) {
    return (
        // <div className="movie-reviews card shadow my-3">
        <div className="movie-reviews my-3 bg-dark text-bg-dark border-secondary-subtle">
            <div className="card-body">
                {/* <h2 className='text-center'>
                    MovieReviewsList
                </h2> */}



                <div className="row g-3">
                    {
                        reviews.length > 0 ?
                            reviews.map(review => {
                                return (
                                    // <MovieReview
                                    //     key={review.id}
                                    //     review={review}
                                    // />
                                    <div
                                        key={review.id}

                                        className="col-md-4"
                                    >
                                        <MovieReview
                                            review={review}
                                        />
                                    </div>
                                )
                            })
                        :
                        <div className="col-12">
                            <p>
                                No reviews found
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};