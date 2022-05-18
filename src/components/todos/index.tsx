import React from "react";
import "./index.scss";

export default function todos(): JSX.Element {
  type todo = {
    text: string;
    status: "pending" | "done";
    actionsRequired:
      | "Urgent Not important"
      | "Urgent and important"
      | "Not urgent nor important"
      | "Important not urgent";
  };

  type todos = todo[];

  const fetchedTodos: todos = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",
      status: "done",
      actionsRequired: "Urgent Not important",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "done",
      actionsRequired: "Urgent and important",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "pending",
      actionsRequired: "Not urgent nor important",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      status: "done",
      actionsRequired: "Important not urgent",
    },
  ];

  return (
    <>
      {fetchedTodos.map((todo) => {
        return (
          <>
            <div className="todo d-flex flex-wrap align-items-start pt-1">
              <div className="col-Auto d-flex justify-content-center align-items-center ">
                <i className="bi bi-check icon--green ps-2 pe-2"></i>
              </div>
              <div className="col-auto d-flex flex-column justify-content-start align-items-start">
                <p className={` todo--text ${todo.status}`}>{todo.text}</p>
                <p
                  className={`todo--action mb-0  ${todo.actionsRequired
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {todo.actionsRequired}
                </p>
              </div>
              <div className="col-auto d-flex justify-content-center align-items-center ms-auto ">
                <i className="bi bi-info-circle icon--white pe-1"></i>
              </div>
              <div className="col-auto d-flex justify-content-center align-items-center ">
                <i className="bi bi-three-dots-vertical icon--white ps-1"></i>
              </div>
            </div>

            <div className="hr"></div>
          </>
        );
      })}
    </>
  );
}
