import React from 'react';
import './rating.css';

const categories = [
  {intial:'C', label: 'Communication', rating: 5 },
  { intial:'E',label: 'Efficiency', rating: 4 },
  {intial:'T', label: 'Time Management', rating: 3 },
  { intial:'D',label: 'Delivery', rating: 3 },
  {intial:'U', label: 'Unavailability', rating: 2 }
];

const RatingTable = () => {
  return (
    <div className="rating-table">
      {categories.map((category, index) => (
        <div key={index} className="rating-row">
                <span className="rating-intial">{category.intial}</span>
          <span className="rating-label">{category.label}</span>
          <div className="rating-dots">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`dot ${i < category.rating ? `dot-${category.rating}` : ''}`}
              ></span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RatingTable;
