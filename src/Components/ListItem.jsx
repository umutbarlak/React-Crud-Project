import axios from "axios";
import formatDate from "../Helpers/formatDate";
import getStatus from "../Helpers/getStatus";
import { useState } from "react";
import Content from "./Content";
import EditMode from "./EditMode";

const ListItem = ({ todos, todo, setTodos }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleDelete = () => {
    // veriyi apiden sil ve stateden sil
    axios
      .delete(`/todos/${todo.id}`)
      .then(() =>
        setTodos((todos) => todos.filter((item) => item.id !== todo.id))
      );
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const newStatus = e.target[0].value;
    const newTitle = e.target[1].value;

    axios
      .patch(`/todos/${todo.id}`, { title: newTitle, status: newStatus })
      .then(() => {
        const updated = { ...todo, status: newStatus, title: newTitle };

        const newTodos = todos.map((todo) =>
          todo.id === updated.id ? updated : todo
        );

        setTodos(newTodos);
      });

    setIsEditMode(false);
  };

  return (
    <li className="p-3 list-group-item d-flex  justify-content-between  align-items-center position-relative">
      {!isEditMode ? (
        <Content
          setIsEditMode={setIsEditMode}
          todo={todo}
          handleDelete={handleDelete}
        />
      ) : (
        <EditMode
          handleEdit={handleEdit}
          setIsEditMode={setIsEditMode}
          todo={todo}
        />
      )}

      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
