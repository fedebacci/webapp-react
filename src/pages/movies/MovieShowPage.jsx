import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";



import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies/';



export default function MovieShowPage () {

    const { id } = useParams();


    const [movie, setMovie] = useState();


    const fetchMovie = () => {
        axios
            .get(apiUrl + id)
            .then(response => {
                console.info(response.data.message, response.data.movie);
                setMovie(response.data.movie);
            })
            .catch(error => {
                console.error(error);
                console.error("error.request", error.request);
                console.error("error.response", error.response);
            });
    };

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="card">
                    <div className="card-body">
                        <Link
                            className="btn btn-outline-dark"
                            to={pages.MOVIES()}
                        >
                            Back to movies
                        </Link>
                    </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="card shadow">
                        <div className="card-body">
                            {/* <Link
                                className="btn btn-outline-dark"
                                to={pages.MOVIES()}
                            >
                                Back to movies
                            </Link> */}
                            <h1 className='text-center'>
                                {/* MovieShowPage - {movie?.title || "Titolo sconosciuto"} */}
                                {/* MovieShowPage */}
                                MovieShowPage - {movie?.id}
                            </h1>

                            <div className="movie-info card shadow">
                                <div className="card-body">

                                    <h1 className='text-center'>
                                        movie-info (future component)
                                    </h1>

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
                                                </div>
                                                <div className="col-12">
                                                    <hr />
                                                </div>
                                                <div className="col-12">
                                                    <p>
                                                        <strong>
                                                            Created:
                                                        </strong>
                                                        {" "}
                                                        {movie.created_at}
                                                    </p>
                                                    <p>
                                                        <strong>
                                                            Updated:
                                                        </strong>
                                                        {" "}
                                                        {movie.updated_at}
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



                            <div className="movie-reviews card shadow mt-3">
                                <div className="card-body">
                                    <h1 className='text-center'>
                                        movie-reviews (future component)
                                    </h1>
                                    {
                                        movie !== undefined && movie.reviews.length > 0 ?
                                            movie.reviews.map(review => {
                                                return (
                                                    <div key={review.id} className="card shadow my-3">
                                                        <div className="card-body">
                                                            <h1>
                                                                review (future component)
                                                            </h1>
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
                                                            <p>
                                                                <strong>
                                                                    Id:
                                                                </strong>
                                                                {" "}
                                                                {review.id}
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    Movie id:
                                                                </strong>
                                                                {" "}
                                                                {review.movie_id}
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    Created at:
                                                                </strong>
                                                                {" "}
                                                                {review.created_at}
                                                            </p>
                                                            <p>
                                                                <strong>
                                                                    Updated at:
                                                                </strong>
                                                                {" "}
                                                                {review.updated_at}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        :
                                        <p>
                                            No reviews not found
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};