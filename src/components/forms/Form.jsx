export default function Form ({ handleFormSubmit, formData, setFormData, btnType, btnText }) {

    const handleInputChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.type);
        // console.log(e.target.value);
        // console.log(formData);


        if (e.target.name === "image") {
            formData[formData.indexOf(formData.find(field => field.name === e.target.name))].value = e.target.files[0];
            console.log(formData[formData.indexOf(formData.find(field => field.name === e.target.name))]);
            console.log(formData);
        } else {
            formData[formData.indexOf(formData.find(field => field.name === e.target.name))].value = e.target.value;
            // console.log(formData[formData.indexOf(formData.find(field => field.name === e.target.name))]);
            // console.log(formData);
        }

        
        setFormData([
            ...formData
        ]);


        // todo: (IN CORSO) SISTEMARE PER ARRAY DI PROPRIETA CHE E FORMDATA
        // if (e.target.name === "image") {
        //     setFormData({
        //         ...formData,
        //         [e.target.name]: e.target.files[0]
        //     })
        // } else {
        //     setFormData({
        //         ...formData,
        //         [e.target.name]: e.target.value
        //     });
        // }
    };




    const renderFormData = () => {
        // console.log("renderFormData", formData);


        return (
            <>
                {
                    formData.map((formField, index) => {
                        return (


                            <div key={index} className={`col-${formField.col_size ?? 6}`}>
                                <label 
                                    htmlFor={formField.name} 
                                    className="form-label"
                                >
                                    {formField.label} 
                                </label>

                                {
                                    // formField.type === "number":
                                    // formField.type === "file": 
                                    // formField.type === "textarea": 
                                }
                                {
                                    formField.type === "textarea" ?
                                        <textarea 
                                            value={formField.value}
                                            onChange={handleInputChange}
                                            name={formField.name}
                                            required

                                            id={formField.name}
                                            rows={formField.rows ?? "3"}
                                            className="form-control" 
                                        >
                                        </textarea>
                                    :
                                        formField.type === "file" ?
                                            <input 
                                                onChange={handleInputChange}
                                                name={formField.name} 
                                                required

                                                type={formField.type} 
                                                id={formField.name}  
                                                className="form-control"
                                            />
                                        :
                                            <input 
                                                value={formField.value}
                                                onChange={handleInputChange}
                                                name={formField.name} 
                                                required

                                                type={formField.type} 
                                                id={formField.name}  
                                                className="form-control"
                                            />
                                }





                            </div> 



                        )
                    })
                }
            </>
        );
    };




    return (
        <>
            <h2 className="text-center">
                dumbForm (Form.jsx)
            </h2>
            <form className="row g-3" onSubmit={handleFormSubmit}>

                {renderFormData()}


























                {/* ESEMPIO */}
                {/* <hr />
                <div className="col-6">
                    <label 
                        htmlFor="title" 
                        className="form-label"
                    >
                        input_di_testo
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
                        htmlFor="release_year" 
                        className="form-label"
                    >
                        input_numerico
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
                        input_textarea
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
                        input_file
                    </label>
                    <input 
                        onChange={handleInputChange}
                        name="image"
                        // todo: decidere se dare errore o utilizzare placeholder di default
                        required

                        type="file"
                        id="image" 
                        className="form-control"
                    />
                </div> */}



                <div className="col-12">
                    <button
                        type="submit"
                        className={`btn btn-${btnType}`}
                    >
                        {btnText}
                    </button>
                </div>

            </form>
        </>
    );
};