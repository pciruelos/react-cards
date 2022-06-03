import React from 'react';
import PropTypes from 'prop-types';

import './card.css'

function Card(props) {
 
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
      <img src={props.imagePic} alt="" className="card-img-top"/>
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          {
            props.text ? props.text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, in! Aperiam laboriosam pariatur deleniti, ea commodi explicabo accusamus quo corporis.'
          }
        </p>
        <a href={props.urlAdress} className="btn btn-outline-secondary rounded-0">Go to library</a>
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imagePic: PropTypes.string,
  urlAdress: PropTypes.string,
}

export default Card