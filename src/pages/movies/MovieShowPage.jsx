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
                    <div className="card">
                    <div className="card-body">
                        {/* <Link
                            className="btn btn-outline-dark"
                            to={pages.MOVIES()}
                        >
                            Back to movies
                        </Link> */}
                        <h1 className='text-center'>
                            MovieShowPage - {movie?.title || "Titolo sconosciuto"}
                        </h1>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
};