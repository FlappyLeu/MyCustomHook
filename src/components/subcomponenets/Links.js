import React, { useState } from "react";

export default function Link(props) {
  const [hover, setHover] = useState(false);
  const linkStyle = {
    textDecoration: "none",
    width: hover ? "30%" : "20%",
    height: hover ? "200px" : "150",
    backgroundColor: hover ? "aqua" : "grey",
    borderRadius: "30px",
    color: "white",
    textAlign: "center",
  };
  return (
    <p
      style={linkStyle}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => {
        setHover(false);
      }}
      onClick={props.onClick}
    >
      {props.name}
    </p>
  );
}
