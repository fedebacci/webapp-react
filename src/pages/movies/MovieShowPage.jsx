import { useParams } from "react-router-dom";

export default function MovieShowPage () {

    const { id } = useParams();

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