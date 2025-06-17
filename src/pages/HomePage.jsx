export default function HomePage () {
    return (
        <section>
            <div className="container my-5">
                <div className="card">
                <div className="card-body">
                    <h1 className='text-center'>
                        {import.meta.env.VITE_APP_NAME}
                    </h1>
                </div>
                </div>
            </div>
        </section>
    );
};