import { useEffect } from "react";
import { useParams } from "react-router-dom";



import axios from "axios";



const apiUrl = import.meta.env.VITE_API_URL + '/movies/';



export default function MovieShowPage () {

    const { id } = useParams();


    const fetchMovie = () => {
        axios
            .get(apiUrl + id)
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
        fetchMovie();
    }, []);

    return (
        <section>
            <div className="container my-5">
                <div className="card">
                <div className="card-body">
                    <h1 className='text-center'>
                        MovieShowPage - {id}
                    </h1>
                </div>
                </div>
            </div>
        </section>
    );
};