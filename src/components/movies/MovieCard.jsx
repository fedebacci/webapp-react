import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";

export default function MovieCard ({ movie }) {
    return (
        <div className="card shadow h-100">
            <div className="card-header p-0 overflow-hidden">
                <img className="img-fluid" src={movie.image} alt={movie.title} />
            </div>
            <div className="card-body">
                <h2 className='text-center'>
                    <small style={{fontSize: '1rem'}}>MovieCard</small>
                </h2>
                <h4>
                    {movie.title}
                </h4>
                <p>
                    {movie.abstract}
                </p>

                <Link
                    className="btn btn-primary"
                    to={pages.SHOWMOVIE(movie.id)}
                >
                    See more
                </Link>

            </div>
        </div>
    );
};