import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar as faStarFull } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";


export default function RatingStars ({ vote, maxVote = 5 }) {



    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < maxVote; i++) {
            // console.log(i);

            // i < vote ? stars.push("🟡") : stars.push("⚪");
            i < vote ? stars.push(<FontAwesomeIcon icon={faStarFull} className='text-earning'/>) : stars.push(<FontAwesomeIcon icon={faStarEmpty} className='text-earning'/>);
        };

        return stars;
    };



    return (
        <>
            <span>
                {renderStars()}
            </span>
            {" "}
            {`(${vote})`}
        </>
    );
};