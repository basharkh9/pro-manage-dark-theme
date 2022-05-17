import "./index.scss";
import React from "react";

export default function home() {
  return (
    <div className="container-fluid d-flex h-100">
      <div className="white h-100 flex-fixed-width-item">fixed 100px</div>
      <div> 200px</div>
    </div>
  );
}
