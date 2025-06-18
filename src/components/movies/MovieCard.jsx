import { Link } from "react-router-dom";
import pages from "../../assets/js/data/pages";

import RatingStars from "../ui/RatingStars";





export default function MovieCard ({ movie }) {
    return (
        <>
            {/* * VERTICAL CARDS */}

            {/* <div className="card shadow h-100">
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
                    <p> */}
                        {/* DEBUG */}
                        {/* AVG Vote: {movie.average_vote || "No vote available"}
                        <br /> */}

                        {/* <RatingStars
                            vote={movie.average_vote} 
                        />
                    </p>

                    <Link
                        className="btn btn-primary"
                        to={pages.SHOWMOVIE(movie.id)}
                    >
                        See more
                    </Link>

                </div>
            </div> */}





            {/* * HORIZONTAL CARDS */}
            {/* <div className="card h-100" > */}
            <div className="card h-100 bg-dark text-bg-dark border-secondary-subtle" style={{boxShadow: '0 0 20px rgba(255,255,255,.05)'}}>
                <div className="row g-0 h-100">
                    
                    <div className="col-md-4">
                        <img src={movie.image} alt={movie.title} className="img-fluid rounded-start" style={{objectFit: 'cover', height: '100%'}} />
                    </div>
                    
                    <div className="col-md-8">
                        <div className="card-body">
                            {/* <h2 className='text-center'>
                                <small style={{fontSize: '1rem'}}>MovieCard</small>
                            </h2> */}
                            {/* <h5 className="card-title">
                                {movie.title}
                            </h5> */}
                            <h4>
                                {movie.title}
                            </h4>
                            <p>
                                {movie.abstract}
                            </p>
                            <p>
                                {/* DEBUG */}
                                {/* AVG Vote: {movie.average_vote || "No vote available"}
                                <br /> */}

                                <RatingStars
                                    vote={movie.average_vote} 
                                />
                            </p>
                            <Link
                                className="btn btn-primary"
                                to={pages.SHOWMOVIE(movie.id)}
                            >
                                See more
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};