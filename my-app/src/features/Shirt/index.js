import React from 'react'
import './shirt.css'

const user = {
  avatarUrl: "Basic.png"
};

function Shirt() {
  return ( 
    <div className="card">
        <img
          src={user.avatarUrl}
          width="200"
          height="200"
          alt=" "
        ></img>
        <div className="card-body">
          <h3>Clothing & Apparel</h3>
          <ul>
            <li>Clothing & Apparel</li>
            <li>Clothing & Apparel</li>
            <li>Clothing & Apparel</li>
            <li>Clothing & Apparel</li>
          </ul>
        </div>
      </div>
   );
}

export default Shirt;


