import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";



import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies/';



import MovieInfo from "../../components/movies/MovieInfo";
import MovieReviewsList from "../../components/movies/MovieReviewsList";



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
                    <div className="card shadow">
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
                            <h2 className='text-center'>
                                {/* MovieShowPage - {movie?.title || "Titolo sconosciuto"} */}
                                {/* MovieShowPage */}
                                MovieShowPage - {movie?.id}
                            </h2>

                            {
                                movie !== undefined ?
                                    <MovieInfo
                                        movie={movie}
                                    />
                                :
                                    <p>
                                        Movie not found
                                    </p>
                            }

                            {
                                movie !== undefined ?
                                    <MovieReviewsList
                                        reviews={movie.reviews}
                                    />
                                :
                                    <p>
                                        Movie not found
                                    </p>
                            }








                            <div className="movie-page-add-review card shadow">
                                <div className="card-body">
                                    <h2 className='text-center'>
                                        movie-page-add-review (future component || form)
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};