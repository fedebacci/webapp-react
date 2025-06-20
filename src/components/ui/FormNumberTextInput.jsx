export default function FormNumberTextInput ({ handleInputChange, value, name, min, max, minLength, maxLength, type }) {
    return (
        <input 
            value={value}
            onChange={handleInputChange}
            name={name} 
            required

            min={min}
            max={max}
            minLength={minLength}
            maxLength={maxLength}

            type={type} 
            id={name}  
            className="form-control"
        />
    );
};