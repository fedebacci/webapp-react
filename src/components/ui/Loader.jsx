import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";



export default function Loader () {
    return (
        <div className="loader">
            {/* <h3>
                Loading...
            </h3> */}
            <FontAwesomeIcon 
                icon={faCircleNotch} 
                spin
                size="5x"
            />
        </div>
    );
};