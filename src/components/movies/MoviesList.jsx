import { useEffect, useState } from "react";



import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies';



import MovieCard from "./MovieCard";



export default function MoviesList () {



    const [movies, setMovies] = useState([]);

    const fetchMovies = () => {
        axios
            .get(apiUrl)
            .then(response => {
                console.info(response.data.message, response.data.movies);
                setMovies(response.data.movies);
            })
            .catch(error => {
                console.error(error);
                console.error("error.request", error.request);
                console.error("error.response", error.response);
            });
    };

    useEffect(() => {
        fetchMovies();
    }, []);



    return (
        <section>
            <div className="container my-5">
                <div className="card">
                    <div className="card-body">
                        <div className="row g-3">
                            <div className="col-12">
                                <h1 className='text-center'>
                                    MoviesList.jsx
                                </h1>
                            </div>

                            {
                                movies.length > 0 ?
                                    movies.map(movie => {
                                        return (
                                            <div key={movie.id} className="col-4">
                                                {/* <p>
                                                    {movie.title}
                                                </p> */}
                                                <MovieCard movie={movie} />
                                            </div>
                                        )
                                    })
                                :
                                <div className="col-12">
                                    <p>
                                        Nessun film presente
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};