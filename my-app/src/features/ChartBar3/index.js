import {
    faFacebook,
    faPinterest,
    faGooglePlus,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'


function SocialBlock(props) {
    const {text, color, total, init} = props;
    return ( 
        <div className="container3" style={{backgroundColor: color}}>
            <div className="face">
                {text === "Facebook" && (
                <FontAwesomeIcon icon={faFacebook} />
              )}
                {text === "Twitter" && (
                <FontAwesomeIcon icon={faTwitter} />
              )}
                {text === "Google+" && (
                <FontAwesomeIcon icon={faGooglePlus} />
              )}
                {text === "Pinterest" && (
                <FontAwesomeIcon icon={faPinterest} />
              )}
            </div>
            <div className="end">
                <div className="app">{text}</div>
                <div>
                    <span className="number">{total}</span>
                    <span className="heart">{init}</span>
                </div>
            </div>
        </div>
     );
}

export default SocialBlock;