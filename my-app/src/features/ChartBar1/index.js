import React from "react";
import './style.css'


function Chart(props) {
    const {text, color1, colors, percentage} = props;
    return ( 
        <div className="container1">
            <div style={{backgroundColor:color1}} className="band">{text}</div>
            <div className="numb">
            <div style={{backgroundColor:colors, width:`${percentage}%`}} className="numb-1">{percentage}%</div>
            </div>
        </div>
     );
}

export default Chart;