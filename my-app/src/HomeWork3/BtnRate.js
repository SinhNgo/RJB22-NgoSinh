import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function BtnRate() {
  const [stars, setStars] = React.useState(0);
  let array = [1, 2, 3, 4, 5];
  return (
    <div>
      {array.map((item) => {
        if (item <= stars) {
          return (
            <AiFillStar
              style={{ color: "red", cursor: "pointer", fontSize: 30 }}
              onClick={() => {
                setStars(item);
              }}
            />
          );
        }
        return (
          <AiOutlineStar
            style={{ color: "red", cursor: "pointer", fontSize: 30 }}
            onClick={() => {
              setStars(item);
            }}
          />
        );
      })}
    </div>
  );
}

export default BtnRate;
