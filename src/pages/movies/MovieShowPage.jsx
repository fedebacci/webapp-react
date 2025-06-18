import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";

import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies/';
// DEBUG
// const apiUrl = import.meta.env.VITE_API_URL + '/moviess/';

import { useLoader } from "../../contexts/LoaderContext";

import MovieInfo from "../../components/movies/MovieInfo";
import MovieReviewsList from "../../components/movies/MovieReviewsList";



export default function MovieShowPage () {

    const { id } = useParams();
    const { setIsLoading } = useLoader();


    
    const [movie, setMovie] = useState();
    const fetchMovie = () => {
        setIsLoading(true);

        axios
            // DEBUG
            .get(apiUrl + id)
            // * Wow, express riesce a rimuovere la stringa dal numero
            // .get(apiUrl + id + "doesNotExist")
            // .get(apiUrl + "doesNotExist")
            .then(response => {
                console.info(response.data.message, response.data.movie);
                setMovie(response.data.movie);
            })
            .catch(error => {
                console.error(error);
                setMovie();
                // DEBUG
                // console.error("error.request.responseURL", error.request.responseURL);
                // console.error("error.response.data.message", error.response.data.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    useEffect(() => {
        fetchMovie();
    }, []);




    return (
        <>
            {/* # ATTENZIONE */}
            {/* # Metto stile in linea per attaccare l'elemento in alto, in modo da avere sempre il link a disposizione e risparmiare tempo quando faccio debug */}
            {/* todo: CANCELLARE LO STILE QUANDO TERMINA IL DEBUG E SI PASSA ALLO STILE O NEL CASO DOVESSE RIMANERE LO STICKY SISTEMARE UNA CLASSE O UN ID CSS */}
            {/* todo: RIMERRERE CLASSE MY-5 INVECE DI PY-5 AL CONTAINER */}
            <section style={{position: 'sticky', top: '0', zIndex: '2', backgroundColor: '#FFFFFF', boxShadow: '0 0 5px rgba(0,0,0,0.33)'}}>
                <div className="container py-5">
                {/* <div className="container my-5"> */}
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





            {/* ? (1/2) Meglio mettere messaggio film non presente o lasciare vuoto? */}
            {/* ? (1/2) Caso 1/2: Vuoto se film non presente (&&) */}
            {/* {
                movie &&
                <section>
                    <div className="container my-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className='text-center'> */}
                                    {/* MovieShowPage */}
                                    {/* DEBUG */}
                                    {/* MovieShowPage - {movie?.id}
                                </h2>
                                <h5 className="text-center">
                                    (Vuoto se film non presente (&&))
                                </h5>



                                <MovieInfo
                                    movie={movie}
                                />



                                <MovieReviewsList
                                    reviews={movie.reviews}
                                />



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
            } */}



            {/* ? (2/2) Meglio mettere messaggio film non presente o lasciare vuoto? */}
            {/* ? (2/2) Caso 2/2: Comunque riempito con messaggio se film non presente (? :) */}
            {/* { movie && <hr />} */}
            {
                movie !== undefined ?
                <section>
                    <div className="container my-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className='text-center'>
                                    MovieShowPage - {movie?.id}
                                </h2>
                                <h5 className="text-center">
                                    (Comunque riempito con messaggio se film non presente (? :))
                                </h5>

                                <hr className="my-5" />

                                <MovieInfo
                                    movie={movie}
                                />

                                <hr className="my-5" />

                                <MovieReviewsList
                                    reviews={movie.reviews}
                                />

                                <hr className="my-5" />

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
                :
                <section>
                    <div className="container my-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h2 className='text-center'>
                                    MovieShowPage - {id}
                                </h2>
                                <h5 className="text-center">
                                    (Vuoto se film non presente (&&))
                                </h5>



                                <p className="mb-0">
                                    Movie {id} not found
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            }





        </>
    );
};