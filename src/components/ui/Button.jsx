export default function Button ({ text, handleClick, type, children }) {
    return (
        <button className={`btn btn-${type}`} onClick={handleClick}>
            { children || text }
        </button>
    );
};