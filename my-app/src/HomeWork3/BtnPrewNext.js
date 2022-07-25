import React, { Component } from "react";
import img1 from "../../src/Assets/Images/img1.jpg";
import img2 from "../../src/Assets/Images/img2.jpg";
import img3 from "../../src/Assets/Images/img3.jpg";
import img4 from "../../src/Assets/Images/img4.jpg";
import img5 from "../../src/Assets/Images/img5.jpg";

const Images = [img1, img2, img3, img4, img5];
class BtnPrewNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: 0,
    };
  }

  render() {
    return (
      <>
        <div>
          <div>
            <img src={Images[this.state.img]} alt=""></img>
          </div>
          <button
            onClick={() => {
              this.state.img === 0
                ? this.setState({ img: Images.length - 1 })
                : this.setState({ img: this.state.img - 1 });
            }}
          >
            Previous Image
          </button>
          <button
            onClick={() => {
              this.state.img === Images.length - 1
                ? this.setState({ img: 0 })
                : this.setState({ img: this.state.img + 1 });
            }}
          >
            Next Image
          </button>
        </div>
      </>
    );
  }
}

export default BtnPrewNext;
