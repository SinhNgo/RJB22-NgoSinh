import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

function BtnLike() {
  // State
  const [like, setLike] = React.useState(false);

  return (
    <div>
      {like && (
        <AiFillHeart
          onClick={() => {
            setLike(false);
          }}
        />
      )}
      {!like && (
        <AiOutlineHeart
          onClick={() => {
            setLike(true);
          }}
        />
      )}
    </div>
  );
}
export default BtnLike;
