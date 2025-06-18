import RatingStars from "../ui/RatingStars";





export default function MovieInfo ({ movie }) {
    return (
        <div className="movie-info card shadow my-3">
            <div className="card-body">

                <h2 className='text-center'>
                    MovieInfo
                </h2>

                {
                    movie !== undefined ?
                    <>
                        <div className="row g-3">
                            <div className="col-4">
                                <img
                                    className="img-fluid"
                
                                    src={movie.image}
                                    alt={movie.title}
                                />
                            </div>
                            <div className="col-8">
                                <p>
                                    <strong>
                                        Title:
                                    </strong>
                                    {" "}
                                    {movie.title}
                                </p>
                                <p>
                                    <strong>
                                        Abstract:
                                    </strong>
                                    {" "}
                                    {movie.abstract}
                                </p>
                                <p>
                                    <strong>
                                        Director:
                                    </strong>
                                    {" "}
                                    {movie.director}
                                </p>
                                <p>
                                    <strong>
                                        Genre:
                                    </strong>
                                    {" "}
                                    {movie.genre}
                                </p>
                                <p>
                                    <strong>
                                        Released:
                                    </strong>
                                    {" "}
                                    {movie.release_year}
                                </p>

                                <p>
                                    {/* DEBUG */}
                                    {/* AVG Vote: {movie.average_vote || "No vote available"}
                                    <br /> */}

                                    <RatingStars
                                        vote={movie.average_vote} 
                                    />
                                </p>
                            </div>
                            <div className="col-12">
                                <hr />
                            </div>
                            <div className="col-12">
                                <p className="text-secondary m-0">
                                    <small>
                                        <strong>
                                            id:
                                        </strong>
                                        {" "}
                                        {movie.id}
                                    </small>
                                </p>
                                <p className="text-secondary m-0">
                                    <small>
                                        <strong>
                                            created_at:
                                        </strong>
                                        {" "}
                                        {movie.created_at}
                                    </small>
                                </p>
                                <p className="text-secondary m-0">
                                    <small>
                                        <strong>
                                            updated_at:
                                        </strong>
                                        {" "}
                                        {movie.updated_at}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </>
                    :
                    <p>
                        Movie not found
                    </p>
                }
            </div>
        </div>
    );
};