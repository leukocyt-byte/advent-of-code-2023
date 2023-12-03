import React from "react";

const Result = ({ result }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        fontFamily: "Verdana",
        fontSize: "3rem",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: "6rem" }}>🎄🎄🎄</div>
      Result is {result}
    </div>
  );
};

export default Result;
