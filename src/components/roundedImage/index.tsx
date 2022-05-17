import React from "react";
import "./index.scss";
import userPhoto from "../../assets/BasharKhadra.jpg";

export default function roundedImage() {
  return <img className="rounded--image" src={userPhoto} />;
}
