import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';

const Rating = ({ value }) => {
    const [rating, setRating] = useState(0);

    const handleRatingChange = (value) => {
        setRating(value);
    };

    return (
        <div>

            <ReactStars
                count={5}
                value={value}
                onChange={handleRatingChange}
                size={24}
                activeColor="#ffd700"
                edit={false}

            />
            {/* <p>Your rating: {rating}</p> */}
        </div>
    );
};

export default Rating;
