import React from 'react';
import './feedbackcard.css';
import man from "../../assets/woman.jpg"
const FeedbackCard = () => {
  return (
    <>
    <div className="feedback-card">
      <div className="profile-section">
       
            <img src={man} alt="Profile"  className="profile-img"  />
        <div className="user-info">
          <div className='user-info-text'>Samuel Guerrero</div>
          <div className='user-info-time'>31 Jan 2023, 01:31 PM</div>
        </div>
        <div className="rating">
          <span className="rating-circle">E</span>
          <span className="rating-text">Very good</span>
        </div>
      </div>
      <div className="feedback-content">
        <p className="feedback-reason">Feedback reason will be displayed here</p>
        <p className='feedback-reason-text'>Your way of presenting the topic was very good in the client meeting</p>
      </div>
  
    </div>
        <button className="response-button">Submit your response</button>
        </>
  );
};

export default FeedbackCard;
