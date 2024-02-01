import { useEffect } from "react";
import { v4 } from "uuid";
import axios from "axios";

const Form = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const status = e.target[1].value;

    if (!title) {
      return alert("Lütfen başlık yazınız");
    }

    const newTodo = {
      title: title,
      status: status,
      id: v4(),
      date: new Date().toLocaleDateString(),
    };

    // veriyi kaydet
    //axios
    axios
      .post("/todos", newTodo)
      .then(() => setTodos((todos) => [...todos, newTodo]))
      .catch(() => alert("Üzgünüz bir problem oluştu"));

    e.target[0].value = "";
    e.target[1].value = "Varsayılan";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5  mx-auto"
    >
      <input
        placeholder="ör: react projesi yap"
        className="form-control shadow"
      />
      <select className="form-select w-50 shadow">
        <option>Varsayılan</option>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};

export default Form;
