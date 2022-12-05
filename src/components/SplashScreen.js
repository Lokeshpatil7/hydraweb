import React from "react";
import orela from "../utils/orela.png";

export default function Screen() {
  return (
    <div style={{ backgroundColor: "#0086A4", height: "38em" }}>
      <center style={{ paddingTop: "15%" }}>
        <img
          className="animate__animated animate__bounce animate__delay-1s"
          src={orela}
        />
      </center>
    </div>
  );
}
