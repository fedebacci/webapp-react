import { useEffect } from "react";



import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";



import axios from "axios";



const apiUrl = import.meta.env.VITE_API_URL + '/movies';



export default function MoviesIndexPage () {

    const fetchMovies = () => {
        axios
            .get(apiUrl)
            .then(response => {
                console.info(response.data);
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
                    <h1 className='text-center'>
                        MoviesIndexPage
                    </h1>
                    <p>
                        Link al singolo movie (esempio: movie/1)
                        <br />
                        <Link className="text-decoration-none" to={pages.SHOWMOVIE(1)}>
                            Testa il link
                        </Link>
                    </p>
                </div>
                </div>
            </div>
        </section>
    );
};