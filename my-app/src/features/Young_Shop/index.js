import React from 'react'
import './young.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const img = {
    pic : "Basic-2.jpg"
}
function Young() {
    return ( 
        <div className='product'>
            <img src={img.pic}
            alt=""
            ></img>
            <div className='container'>
                <p>YOUNG SHOP</p>
                <div className='line'></div>
                <p className='blue'>Samsung UHD TV 24inch</p>
                <div className='star'>
                    <FontAwesomeIcon icon={faStar} style={{'color':"#FFD700"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{'color':"#FFD700"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{'color':"#FFD700"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} style={{'color':"#FFD700"}}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    <span>02</span>
                </div>
                <span>$599</span>
            </div>
        </div>
     );
}

export default Young;