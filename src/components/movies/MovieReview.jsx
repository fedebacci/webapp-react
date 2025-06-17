export default function MovieReview ({ review }) {
    return (
        <div key={review.id} className="movie-page-review card shadow my-3">
            <div className="card-body">
                <h2 className='text-center'>
                    MovieReview - {review.id}
                </h2>
                <p>
                    <strong>
                        Name:
                    </strong>
                    {" "}
                    {review.name}
                </p>
                <p>
                    <strong>
                        Vote:
                    </strong>
                    {" "}
                    {review.vote}
                </p>
                <p>
                    <strong>
                        Text:
                    </strong>
                    {" "}
                    {review.text}
                </p>
                <hr />
                <p className="text-secondary m-0">
                    <small>
                        <strong>
                            id:
                        </strong>
                        {" "}
                        {review.id}
                    </small>
                </p>
                <p className="text-secondary m-0">
                    <small>
                        <strong>
                            movie_id:
                        </strong>
                        {" "}
                        {review.movie_id}
                    </small>
                </p>
                <p className="text-secondary m-0">
                    <small>
                        <strong>
                            created_at:
                        </strong>
                        {" "}
                        {review.created_at}
                    </small>
                </p>
                <p className="text-secondary m-0">
                    <small>
                        <strong>
                            updated_at:
                        </strong>
                        {" "}
                        {review.updated_at}
                    </small>
                </p>
            </div>
        </div>
    );
};