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

                            <div className="movie-page-info card shadow">
                                <div className="card-body">

                                    <h2 className='text-center'>
                                        movie-page-info (future component)
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
                                                </div>
                                                <div className="col-12">
                                                    <hr />
                                                </div>
                                                <div className="col-12">
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



                            <div className="movie-page-reviews card shadow mt-3">
                                <div className="card-body">
                                    <h2 className='text-center'>
                                        movie-page-reviews (future component)
                                    </h2>
                                    {
                                        movie !== undefined && movie.reviews.length > 0 ?
                                            movie.reviews.map(review => {
                                                return (
                                                    <div key={review.id} className="movie-page-review card shadow my-3">
                                                        <div className="card-body">
                                                            <h2 className='text-center'>
                                                                movie-page-review (future component)
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
                                                )
                                            })
                                        :
                                        <p>
                                            No reviews not found
                                        </p>
                                    }
                                </div>
                            </div>



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