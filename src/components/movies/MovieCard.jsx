import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";

export default function MovieCard ({ movie }) {
    return (
        <div className="card h-100">
            <div className="card-header">
                <h4>
                    {movie.title}
                </h4>
            </div>
            <div className="card-body">
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