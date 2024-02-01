import React from "react";
import getStatus from "../Helpers/getStatus";
const Content = ({ todo, handleDelete, setIsEditMode }) => {
  return (
    <>
      {getStatus(todo.status)}
      <span className="text-nowrap text-truncate mx-4 ">{todo.title}</span>
      <div className="btn-group">
        <button
          onClick={() => setIsEditMode(true)}
          className="btn btn-sm btn-primary"
        >
          Düzenle
        </button>
        <button onClick={handleDelete} className="btn btn-sm btn-danger">
          Sil
        </button>
      </div>
    </>
  );
};

export default Content;
