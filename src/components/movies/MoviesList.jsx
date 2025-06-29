import { useEffect, useState } from "react";

import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies';

import { useLoader } from "../../contexts/LoaderContext";

import MovieCard from "./MovieCard";



export default function MoviesList () {

    const { setIsLoading } = useLoader();
    
    
    
    // todo: se faccio richieste in pagina (come showmovie) spostare richiesta sotto in pagina index movies
    const [movies, setMovies] = useState([]);
    const fetchMovies = () => {
        setIsLoading(true);
        axios
            // DEBUG
            // .get(apiUrl + "doesnotExist")
            .get(apiUrl)
            .then(response => {
                console.info(response.data.message, response.data.movies);
                setMovies(response.data.movies);
            })
            .catch(error => {
                console.error(error);
                setMovies([]);
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
        // <div className="card shadow my-3">
        <div className="">
            <div className="card-body">
                <div className="row row-cols-2 g-3">
                    {/* <div className="col-12">
                        <h2 className='text-center'>
                            MoviesList
                        </h2>
                    </div> */}



                    <div className="col-12">
                        <h2 className="mb-0">
                            MOVIES
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