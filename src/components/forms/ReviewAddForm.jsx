export default function ReviewAddForm ({ handleFormSubmit, formData, setFormData }) {


    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };


    return (
        <>
            <form className="row g-3" onSubmit={handleFormSubmit}>

                <div className="col-6">
                    <label 
                        htmlFor="name" 
                        className="form-label"
                    >
                        Name
                    </label>
                    <input 
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                        required

                        type="text"
                        id="name" 
                        className="form-control"
                    />
                </div>
                
                
                
                <div className="col-6">
                    <label 
                        htmlFor="vote" 
                        className="form-label"
                    >
                        Vote
                    </label>
                    <input 
                        value={formData.vote}
                        onChange={handleInputChange}
                        name="vote"
                        required

                        type="number"
                        min="1"
                        max="5"

                        id="vote" 
                        className="form-control"
                    />
                </div>

                <div className="col-12">
                    <label 
                        htmlFor="text" 
                        className="form-label"
                    >
                        Review
                    </label>
                    <textarea 
                        value={formData.text}
                        onChange={handleInputChange}
                        name="text"
                        required

                        id="text"
                        rows="3"
                        className="form-control" 
                    >
                    </textarea>
                </div>

                <div className="col-12">
                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Send review
                    </button>
                </div>

            </form>
        </>
    );
};