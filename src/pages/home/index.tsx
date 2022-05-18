import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Todos from "../../components/todos";

export default function home() {
  return (
    <div className="container-fluid main--container">
      <div className="row container-wrapper">
        <div className="col-auto d-flex flex-column sidebar justify-content-center">
          <div className="p-2 bd-highlight">Flex</div>
          <div className="p-2 bd-highlight">Flex</div>
          <div className="p-2 bd-highlight">Flex</div>
        </div>
        <div className="col-10 p-0 m-0">
          <div className="col-6 d-flex flex-column">
            <Todos />
          </div>
        </div>
        <div className="col-auto">Date</div>
      </div>
    </div>
  );
}
