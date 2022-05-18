import React from "react";
import "./index.scss";

type imagesrc = { src: string };
export default function roundedImage(props: imagesrc) {
  return <img className="rounded--image" src={props.src} />;
}
