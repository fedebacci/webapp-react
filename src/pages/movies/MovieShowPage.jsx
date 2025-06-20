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


import Form from "../../components/ui/Form";



const formInitialData = [
    {
        name: "name",
        label: "Name",
        type: "text",
        value: "",

        col_size: "4",
    },
    {
        name: "vote",
        label: "Vote",
        type: "number",
        value: 1,
        
        min: 1,
        max: 5,
        col_size: "4",
    },
    {
        name: "text",
        label: "Review",
        type: "text",
        value: "",
        
        col_size: "4",
    },
];

const formBtnType = "success";
const formBtnText = "Invia";



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





    const [formData, setFormData] = useState(formInitialData);

    const fetchStoreMovieReview = (dataToSend) => {
        console.log("dataToSend", dataToSend);

        setIsLoading(true);
        axios
            .post(apiUrl + id + "/reviews", dataToSend)
            .then(response => {
                console.info(response.data.message, response.data);

                // * Chiedo nuovamente i dati del libro e aggiorno lista delle recensioni
                // todo: capire se casistica adatta a richiesta solo per nuova recensione e modifica dello state movie 
                fetchMovie();

                setFormData(formInitialData);
            })
            .catch(error => {
                console.error(error);
                // DEBUG
                // console.error("error.request.responseURL", error.request.responseURL);
                // console.error("error.response.data.message", error.response.data.message);
            })
            .finally(() => {
                // ! NB: Non serve se faccio fetch nel then di questa richiesta
                setIsLoading(false);
            });
    };

    const parseFormData = () => {
        // console.log("formData", formData);
        const dataToSend = {};
        formData.forEach((formInput) => {
            dataToSend[formInput.name] = formInput.value;
        })
        // console.log("dataToSend", dataToSend);

        return dataToSend;
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log("handleFormSubmit formData", formData);

        fetchStoreMovieReview(parseFormData());
    };





    return (
        <>
            {/* # ATTENZIONE */}
            {/* # Metto stile in linea per attaccare l'elemento in alto, in modo da avere sempre il link a disposizione e risparmiare tempo quando faccio debug */}
            {/* todo: CANCELLARE LO STILE QUANDO TERMINA IL DEBUG E SI PASSA ALLO STILE O NEL CASO DOVESSE RIMANERE LO STICKY SISTEMARE UNA CLASSE O UN ID CSS */}
            {/* todo: RIMERRERE CLASSE MY-5 INVECE DI PY-5 AL CONTAINER */}
            {/* <section style={{position: 'sticky', top: '0', zIndex: '2', backgroundColor: '#FFFFFF', boxShadow: '0 0 5px rgba(0,0,0,0.33)'}}> */}
            <section style={{position: 'sticky', top: '57px', zIndex: '2', backgroundColor: '#212529'}}>
                <div className="container py-5">
                {/* <div className="container my-5"> */}
                    {/* <div className="card shadow"> */}
                    <div className="">
                        <div className="card-body">
                            <Link
                                // className="btn btn-outline-light text-bg-dark"
                                className="btn btn-outline-secondary"
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
                        {/* <div className="card shadow"> */}
                        <div className="">
                            <div className="card-body">
                                {/* <h2 className='text-center'>
                                    MovieShowPage - {movie?.id}
                                </h2>
                                <h5 className="text-center">
                                    (Comunque riempito con messaggio se film non presente (? :))
                                </h5> */}

                                {/* <hr className="my-5" /> */}

                                <h2 className="mb-0">
                                    INFO
                                </h2>
                                <MovieInfo
                                    movie={movie}
                                />

                                <hr className="my-5" />

                                <h2 className="mb-0">
                                    REVIEWS
                                </h2>
                                <MovieReviewsList
                                    reviews={movie.reviews}
                                />



                                <hr className="my-5" />

                                <h2 className="mb-0">
                                    ADD YOUR REVIEW
                                </h2>
                                {/* <div className="movie-page-add-review card shadow"> */}
                                {/* <div className="movie-page-add-review card my-3 bg-dark text-bg-dark border-secondary-subtle">
                                    <div className="card-body">
                                        <h2 className='text-center'>
                                            movie-page-add-review (future component || form)
                                        </h2>
                                    </div>
                                </div> */}
                                <div className="movie-page-add-review card my-3 bg-dark text-bg-dark border-secondary-subtle">
                                    <div className="card-body">
                                        <h2 className='text-center'>
                                            movie-page-add-review (future component || form)
                                        </h2>

                                        <Form 
                                            handleFormSubmit={handleFormSubmit} 
                                            formData={formData} 
                                            setFormData={setFormData} 
                                            btnType={formBtnType} 
                                            btnText={formBtnText}
                                        />

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
                                {/* <h5 className="text-center">
                                    (Vuoto se film non presente (&&))
                                </h5> */}



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