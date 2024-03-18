import React, { useState } from "react";
import "./Features.css";

const Features = (props) => {
  const { title, description } = props.feature;
  const [rippleStyle, setRippleStyle] = useState({});

  const handleHover = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2;

    setRippleStyle({
      top: y - size / 2 + "px",
      left: x - size / 2 + "px",
      width: size + "px",
      height: size + "px",
    });
  };

  return (
    <div className="feature" onMouseEnter={handleHover}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="ripple" style={rippleStyle}></div>
    </div>
  );
};

export default Features;
