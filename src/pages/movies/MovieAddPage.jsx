import { useState } from "react";

import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL + '/movies/';
// DEBUG
// const apiUrl = import.meta.env.VITE_API_URL + '/moviess/';


import { useLoader } from "../../contexts/LoaderContext";

// - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */
// import MovieAddForm from "../../components/forms/MovieAddForm";
import Form from "../../components/forms/Form";



// - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */
// const formInitialData = {
//     title: "",
//     director: "",
//     genre: "",
//     release_year: new Date().getFullYear(),
//     abstract: "",
//     image: "",
// }
    
// - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */
const dumbFormFormInitialData = [
    {
        name: "title",
        label: "Title",
        type: "text",
        value: "",
    },
    {
        name: "director",
        label: "Director",
        type: "text",
        value: "",
    },
    {
        name: "genre",
        label: "Genre",
        type: "text",
        value: "",

        col_size: "4",
    },
    {
        name: "release_year",
        label: "Release year",
        type: "number",
        value: new Date().getFullYear(),

        min: 1895,
        max: new Date().getFullYear(),
        col_size: "4",
    },
    {
        name: "image",
        label: "Image",
        type: "file",
        value: "",

        col_size: "4",
    },
    {
        name: "abstract",
        label: "Abstract",
        type: "textarea",
        value: "",
        
        col_size: "12",
        rows: 3,
    },
];

const dumbFormBtnType = "success";
const dumbFormBtnText = "Invia";





export default function MovieAddPage () {

    const { setIsLoading } = useLoader();

    const navigate = useNavigate();

    // - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */
    // const [formData, setFormData] = useState(formInitialData);

    // const fetchCreateNewMovie = () => {
    //     setIsLoading(true);
    //     axios
    //         .post(
    //             apiUrl, 
    //             formData, 
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data"
    //                 }
    //             }
    //         )
    //         .then(response => {
    //             console.info(response.data.message, response.data);
    //             console.info("response.data.newMovie_id", response.data.newMovie_id);

    //             navigate(pages.SHOWMOVIE(response.data.newMovie_id));

    //             setFormData(formInitialData);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             // DEBUG
    //             // console.error("error.request.responseURL", error.request.responseURL);
    //             // console.error("error.response.data.message", error.response.data.message);
    //         })
    //         .finally(() => {
    //             // ! NB: Non serve se faccio fetch nel then di questa richiesta
    //             setIsLoading(false);
    //         });
    // };

    // const handleCreateMovieFormSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("handleCreateMovieFormSubmit");

    //     fetchCreateNewMovie();
    // };





    // - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */
    const [dumbFormFormData, dumbFormSetFormData] = useState(dumbFormFormInitialData);

    const fetchDumbFormCreateNewMovie = (DumbFormDataToSend) => {
        console.log("DumbFormDataToSend", DumbFormDataToSend);

        // setIsLoading(true);
        // axios
        //     .post(
        //         apiUrl, 
        //         formData, 
        //         {
        //             headers: {
        //                 "Content-Type": "multipart/form-data"
        //             }
        //         }
        //     )
        //     .then(response => {
        //         console.info(response.data.message, response.data);
        //         console.info("response.data.newMovie_id", response.data.newMovie_id);

        //         navigate(pages.SHOWMOVIE(response.data.newMovie_id));

        //         setFormData(formInitialData);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //         // DEBUG
        //         // console.error("error.request.responseURL", error.request.responseURL);
        //         // console.error("error.response.data.message", error.response.data.message);
        //     })
        //     .finally(() => {
        //         // ! NB: Non serve se faccio fetch nel then di questa richiesta
        //         setIsLoading(false);
        //     });
    };

    const parseDumbFormData = () => {
        console.log("dumbFormFormData", dumbFormFormData);
        const DumbFormDataToSend = {};
        dumbFormFormData.forEach((dumbFormInput) => {
            DumbFormDataToSend[dumbFormInput.name] = dumbFormInput.value;
        })
        console.log("DumbFormDataToSend", DumbFormDataToSend);

        return DumbFormDataToSend;
    };

    const dumbFormHandleFormSubmit = (e) => {
        e.preventDefault();
        console.log("dumbFormHandleFormSubmit dumbFormFormData", dumbFormFormData);

        fetchDumbFormCreateNewMovie(parseDumbFormData());
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



            <section>
                <div className="container my-5">
                    {/* <div className="card shadow"> */}
                    <div className="">
                        <div className="card-body">
                            {/* <h2 className='text-center'>
                                MovieAddPage
                            </h2> */}


                            <h2 className="mb-0">
                                ADD NEW MOVIE
                            </h2>

                            {/* // - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */}
                            {/* <MovieAddForm 
                                formData={formData}
                                setFormData={setFormData}
                                handleFormSubmit={handleCreateMovieFormSubmit} 
                            /> */}


                            {/* // - PASSAGGIO DA FORM SPECIFICI A FORM DUMB */}
                            <Form 
                                handleFormSubmit={dumbFormHandleFormSubmit} 
                                formData={dumbFormFormData} 
                                setFormData={dumbFormSetFormData} 
                                btnType={dumbFormBtnType} 
                                btnText={dumbFormBtnText}
                            />



                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};