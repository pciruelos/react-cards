import React from "react";
import Card from "./Card";

import image1 from "./../assest/orne.jpg"
import image2 from "./../assest/baba.jpg"
import image3 from "./../assest/morix.jpg"

const cards = [
    {
        id:1,
        title: 'Orne bbita',
        image: image1,
        url: "www.google.com"
    },
    
    {
        id:2,
        title: 'babita',
        image: image2,
        url: "www.yahoo.com"
    },
    {
        id:3,
        title: 'morix',
        image: image3,
        url: "www.firefox.com",
        text: "vas a morir liso"
    },

]

function CardList() {
  return (
    <div className="container d-flex justify-content-around align-items-center h-100">
      <div className="row">
          {cards.map(card => <div className="col-md-4" key={card.id}>
                <Card title={card.title} imagePic={card.image} urlAdress={card.url} text={card.text}/>
          </div> )}
      </div>
    </div>
  );
}

export default CardList;
