import React from "react";
import './PhoneDetails.css'

export default function PhoneDetails(props) {
  const {
    match: { params },
    phones,
  } = props;
  console.log(phones);

  return (
    <div>
      {phones
        .filter((phone) => {
          return phone.name === params.name;
        })
        .map((el) => {
          return (
            <div className="phone-details" key="el.name">
            <div>
              <h1>{el.name}</h1>
              <p>{el.price}€</p>
              <p>{el.manufacturer}</p>
              <p>Description: {el.description}</p>
              <p>Processor: {el.processor}</p>
              <p>RAM: {el.ram}</p>
              <p>Screen: {el.screen}</p>
              </div>
              <img src={el.image} alt="phone-img"/>
            </div>
          );
        })}
    </div>
  );
}
