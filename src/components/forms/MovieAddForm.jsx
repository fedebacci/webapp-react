export default function MovieAddForm ({ handleFormSubmit, formData, setFormData }) {

    const handleInputChange = (e) => {
        if (e.target.name === "image") {
            setFormData({
                ...formData,
                [e.target.name]: e.target.files[0]
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };


    return (
        <>
            <form className="row g-3" onSubmit={handleFormSubmit}>

                <div className="col-6">
                    <label 
                        htmlFor="title" 
                        className="form-label"
                    >
                        Title
                    </label>
                    <input 
                        value={formData.title}
                        onChange={handleInputChange}
                        name="title"
                        required

                        type="text"
                        id="title" 
                        className="form-control"
                    />
                </div>
                
                
                <div className="col-6">
                    <label 
                        htmlFor="director" 
                        className="form-label"
                    >
                        Director
                    </label>
                    <input 
                        value={formData.director}
                        onChange={handleInputChange}
                        name="director"
                        required

                        type="text"
                        id="director" 
                        className="form-control"
                    />
                </div>
                
                
                <div className="col-6">
                    <label 
                        htmlFor="genre" 
                        className="form-label"
                    >
                        Genre
                    </label>
                    <input 
                        value={formData.genre}
                        onChange={handleInputChange}
                        name="genre"
                        required

                        type="text"
                        id="genre" 
                        className="form-control"
                    />
                </div>



                <div className="col-6">
                    <label 
                        htmlFor="release_year" 
                        className="form-label"
                    >
                        Release year
                    </label>
                    <input 
                        value={formData.release_year}
                        onChange={handleInputChange}
                        name="release_year"
                        required

                        type="number"
                        min="1895"
                        max={new Date().getFullYear()}

                        id="release_year" 
                        className="form-control"
                    />
                </div>



                <div className="col-12">
                    <label 
                        htmlFor="abstract" 
                        className="form-label"
                    >
                        Abstract
                    </label>
                    <textarea 
                        value={formData.abstract}
                        onChange={handleInputChange}
                        name="abstract"
                        required

                        id="abstract"
                        rows="3"
                        className="form-control" 
                    >
                    </textarea>
                </div>



                <div className="col-12">
                    <label 
                        htmlFor="image" 
                        className="form-label"
                    >
                        Image
                    </label>
                    <input 
                        onChange={handleInputChange}
                        name="image"
                        // todo: decidere se dare errore o utilizzare placeholder di default
                        required

                        // * ATTENZIONE: MEGLIO IMAGE (MA NON FUNZIONA IN REACT?)
                        // * SIMILMENTE PER PASSWORD RISPETTO A TEXT, AGGIUNGE VALIDAZIONE DEL TIPO DI FILE NEL BROWSER, POTENZIANDO IL TYPE FILE
                        // type="image"
                        type="file"
                        id="image" 
                        className="form-control"
                    />
                </div>



                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Add movie
                    </button>
                </div>

            </form>
        </>
    );
};