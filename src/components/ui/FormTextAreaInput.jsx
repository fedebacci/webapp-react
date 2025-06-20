export default function FormTextAreaInput ({ handleInputChange, value, name, minLength, maxLength, rows }) {
    return (
        <textarea 
            value={value}
            onChange={handleInputChange}
            name={name}
            required

            minLength={minLength}
            maxLength={maxLength}

            id={name}
            rows={rows ?? "3"}
            className="form-control" 
        >
        </textarea>
    );
};