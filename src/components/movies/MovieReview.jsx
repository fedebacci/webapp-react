import RatingStars from "../ui/RatingStars";






export default function MovieReview ({ review }) {
    return (
        // <div key={review.id} className="movie-review card shadow my-3">
        <div key={review.id} className="movie-review card h-100 bg-dark text-bg-dark border-secondary-subtle" style={{boxShadow: '0 0 20px rgba(255,255,255,.05)'}}>
            <div className="card-body">
                {/* <h2 className='text-center'>
                    MovieReview - {review.id}
                </h2> */}
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
                    {/* {review.vote} */}
                    {/* <RatingStars
                        vote={review.vote} 
                        maxVote={4} 
                    /> */}
                    <RatingStars
                        vote={review.vote}
                    />
                </p>
                <p>
                    <strong>
                        Text:
                    </strong>
                    {" "}
                    {review.text}
                </p>


                
                {/* <hr />
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
                </p> */}
            </div>
        </div>
    );
};