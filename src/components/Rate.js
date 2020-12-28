import React from 'react';

const Rate = ({ rating, setInputSearchRate }) => {
  const stars = (x) => {
    let starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starsArray.push(
          <span key={i} onClick={() => setInputSearchRate(i)}>
            ★
          </span>
        );
      } else {
        starsArray.push(
          <span key={i} onClick={() => setInputSearchRate(i)}>
            ☆
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{stars(rating)}</div>;
};

Rate.defaultProps = {
  setRatingSearch: () => {},
  rating: 1,
};

export default Rate;