import React, { Component } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

class LikeBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      like: false,
    };
  }

  setLike = () => {
    this.setState({
      like: !this.state.like,
    });
  };

  render() {
    return (
      <>
        <div onClick={this.setLike}>
          {this.state.like ? (
            <AiFillHeart style={{ color: "red", fontSize: 30 }}></AiFillHeart>
          ) : (
            <AiOutlineHeart
              style={{ color: "orange", fontSize: 30 }}
            ></AiOutlineHeart>
          )}
        </div>
      </>
    );
  }
}

export default LikeBtn;
