import React from "react";
import spinner from "../assets/spinner.gif";

export default () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <img
        src={spinner}
        style={{ width: "200px", display: "block", margin: "auto" }}
        alt="Loading..."
      />
    </div>
  );
};
