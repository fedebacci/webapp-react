export default function HomePage () {
    return (
        <section>
            <div className="container my-5">
                <div className="card shadow">
                    <div className="card-body">
                        <h2 className='text-center'>
                            HomePage - {import.meta.env.VITE_APP_NAME} 
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
};