import React from 'react';
import './card.css';

const Card = ({ title, content, imageUrl }) => {
  return (
    
    <div className="card">
      <img className="card-image" src={imageUrl} alt={title} />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
      
  );
};

Card.defaultProps = {
  title: "No Data Found",
  imageUrl: "https://th.bing.com/th/id/OIP.gV1cXI_SNBK_nU1yrE_hcwHaGp?rs=1&pid=ImgDetMain"
}

export default Card;