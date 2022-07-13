import React, { Component } from "react";
import img1 from "../../src/assets/Images/img1.jpg";
import img2 from "../../src/assets/Images/img2.jpg";
import img3 from "../../src/assets/Images/img3.jpg";
import img4 from "../../src/assets/Images/img4.jpg";
import img5 from "../../src/assets/Images/img5.jpg";

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
