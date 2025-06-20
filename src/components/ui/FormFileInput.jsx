export default function FormFileInput ({ handleInputChange, name, type }) {
    return (
        <input 
            onChange={handleInputChange}
            name={name} 
            // todo: decidere se dare errore o utilizzare placeholder di default
            required

            type={type} 
            id={name}  
            className="form-control"
        />
    );
};