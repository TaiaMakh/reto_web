import React from "react";
import { Link } from "react-router-dom";
import './PhoneList.css'

export default function PhoneList({ phones }) {
  return (
    <div className="phone-list">
      {phones.map((phone) => {
        return (
          <Link  className="list-group" key={phone.id} to={`/${phone.name}`}>
            <div >
              <p className="link-phone">{phone.name}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
