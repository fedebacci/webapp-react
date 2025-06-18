import { useEffect, useState } from "react";

import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies';

import { useLoader } from "../../contexts/LoaderContext";

import MovieCard from "./MovieCard";



export default function MoviesList () {

    const { setIsLoading } = useLoader();
    
    
    
    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {
        setIsLoading(true);
        axios
            .get(apiUrl)
            .then(response => {
                console.info(response.data.message, response.data.movies);
                setMovies(response.data.movies);
            })
            .catch(error => {
                console.error(error);
                // DEBUG
                // console.error("error.request.responseURL", error.request.responseURL);
                // console.error("error.response.data.message", error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchMovies();
    }, []);



    return (
        <div className="card shadow my-3">
            <div className="card-body">
                <div className="row row-cols-5 g-3">
                    <div className="col-12">
                        <h2 className='text-center'>
                            MoviesList
                        </h2>
                    </div>

                    {
                        movies.length > 0 ?
                            movies.map(movie => {
                                return (
                                    <div key={movie.id} className="col">
                                        <MovieCard movie={movie} />
                                    </div>
                                )
                            })
                        :
                        <div className="col-12">
                            <p className="mb-0">
                                No movies available
                            </p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};