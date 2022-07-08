import React from "react";
import './style.css'

const img = {
    pic : "Basic-3.jpg"
}
function Room() {
    return ( 
        <div className="container">
            <img src={img.pic} alt=""></img>
            <div>
                <p className="">Technolory</p>
                <h2>Harman Kadon Onyx Studio Mini, Reviews & Experiences</h2>
                <div>
                    <span>Feb 21, 2021 by </span>
                    <span>drfurion</span>
                </div>
            </div>
        </div>
     );
}

export default Room;
