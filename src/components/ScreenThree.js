import React from "react";
import circleImg from "../utils/circle.png";
import logo from "../utils/logo.png";
import "./screentwo.css";

export default function ScreenThree() {
  return (
    <div
      style={{
        height: "38em",
        backgroundColor: "#0086A4",
      }}
    >
      <center
        style={{
          height: "100%",
          position: "relative",
        }}
      >
        <div
          className="rectangleOne"
          style={{
            backgroundColor: "black",
            height: "17em",
            width: "100%",
            borderRadius: "0px 0px 190px 190px",
          }}
        >
          <img
            src={logo}
            //style={{ position: "absolute", top: "200px", left: "38em" }}
          />{" "}
        </div>
        <img
          src={circleImg}
          style={{
            position: "absolute",
            top: "200px",
            left: "38em",
          }}
        />
        <div
          className="rectangleTwo"
          style={{
            height: "17em",
            width: "100%",
            borderRadius: "190px 190px 0px 0px",
            marginBottom: "0",
            marginTop: "4em",
          }}
        ></div>

        {/* <img src={rectangle2} style={{ height: "8em", width: "412px" }} /> */}
      </center>
    </div>
  );
}
