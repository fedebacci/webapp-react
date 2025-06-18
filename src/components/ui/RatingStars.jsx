import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";



export default function RatingStars ({ vote, maxVote = 5 }) {

    const renderStars = () => {
        const stars = [];

        // console.debug(vote);
        if (!vote) return "No vote available";

        for (let i = 0; i < maxVote; i++) {
            i < vote ? stars.push(<FontAwesomeIcon key={i} icon={faStarFull} className='text-warning'/>) : stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} className='text-warning'/>);
        };

        return stars;
    };



    return (
        <>
            <span>
                {renderStars()}
            </span>
            {/* DEBUG */}
            {/* {" "}
            {`(${vote})`} */}
        </>
    );
};