import MoviesList from "../../components/movies/MoviesList";



export default function MoviesIndexPage () {
    return (
        <>
            <section>
                <div className="container my-5">
                    <div className="card shadow">
                        <div className="card-body">
                            <h2 className='text-center'>
                                MoviesIndexPage
                            </h2>

                            <hr className="my-5" />

                            <MoviesList />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};