import React from "react";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRobot, faStar, faBrain } from '@fortawesome/free-solid-svg-icons'

function Chart2(props) {
    const {name, likes, title, followings} = props;
    return ( 
        <div className="container2">
            <div className="devv" >
                <div className="devv-1" style={{backgroundColor:title}}>
                {name === "HTML" && (
                <FontAwesomeIcon icon={faRobot} />
              )}
                {name === "CSS" && (
                <FontAwesomeIcon icon={faStar} />
              )}
                {name === "PHP" && (
                <FontAwesomeIcon icon={faBrain} />
              )}
                </div>
                <div className="devv-2">{name}</div>
            </div>
            <div className="numb">
                <div style={{backgroundColor:followings, width:`${likes}%`}} className="numb-1"></div>
            </div>
        </div>
     );
}

export default Chart2;