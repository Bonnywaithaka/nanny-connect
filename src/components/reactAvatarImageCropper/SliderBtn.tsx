import React from "react";

class SliderBtn extends React.Component {
  sliderW = 0;

  offsetLeft = 0;

  ifMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  sliderStyle = {
    width: "90%",
    maxWidth: "250px",
    height: "7px",
    backgroundColor: "#e6ecf0",
    position: "relative",
    border: 0,
    boxShadow: "inset 0 0 3px rgba(0,0,0,0.15)",
  };

  sliderBtnStyle = {
    position: "absolute",
    zIndex: "2",
    width: "16px",
    height: "16px",
    top: "-5px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    left: "0%",
    cursor: "pointer",
    boxShadow: "0 0 3px rgba(0,0,0,0.1)",
    border: "1px solid #c5c5c5",
  };

  constructor(props) {
    super(props);
    this.state = {
      relX: 0,
    };
  }

  componentDidMount() {
    this.sliderW = this.ele.offsetWidth;
    this.offsetLeft = this.ele.getBoundingClientRect().left;
    if (this.ifMobile) {
      this.ele.children[0].addEventListener("touchstart", this._onStart);
    } else {
      this.ele.children[0].addEventListener("mousedown", this._onStart);
    }
  }

  _onStart = (e) => {
    if (this.ifMobile) {
      document.addEventListener("touchmove", this._onMove);
      document.addEventListener("touchend", this._onUp);
    } else {
      document.addEventListener("mousemove", this._onMove);
      document.addEventListener("mouseup", this._onUp);
    }

    e.preventDefault();
  };

  _onMove = (e) => {
    const x = this.ifMobile ? e.touches[0].clientX : e.clientX;
    let relX = ((x - this.offsetLeft) / this.sliderW) * 100;
    relX = relX > 100 ? 100 : relX;
    relX = relX < 0 ? 0 : relX;
    this.setState({
      relX,
    });
    this.props.resize(relX);
    e.preventDefault();
  };

  _onUp = (e) => {
    if (this.ifMobile) {
      document.removeEventListener("touchmove", this._onMove);
      document.removeEventListener("touchend", this._onUp);
    } else {
      document.removeEventListener("mousemove", this._onMove);
      document.removeEventListener("mouseup", this._onUp);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div
        ref={(ele) => {
          this.ele = ele;
        }}
        style={{ ...this.sliderStyle, ...this.props.sliderStyle }}
      >
        <span
          style={{
            ...this.sliderBtnStyle,
            ...this.props.sliderBtnStyle,
            left: `${this.state.relX}%`,
          }}
        />
      </div>
    );
  }
}

export default SliderBtn;
