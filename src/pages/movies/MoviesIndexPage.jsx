import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";



import MoviesList from "../../components/movies/MoviesList";



export default function MoviesIndexPage () {
    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="card">
                    <div className="card-body">
                        <h1 className='text-center'>
                            MoviesIndexPage
                        </h1>
                        {/* <p>
                            Link al singolo movie (esempio: movie/1)
                            <br />
                            <Link className="text-decoration-none" to={pages.SHOWMOVIE(1)}>
                                Testa il link
                            </Link>
                        </p> */}
                    </div>
                    </div>
                </div>
            </section>


            <MoviesList />
            
        </>
    );
};