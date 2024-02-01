import { useEffect, useState } from "react";
import Form from "./Components/Form";
import Loader from "./Components/Loader";
import ListItem from "./Components/ListItem";
import axios from "axios";
import NavigationButtons from "./Components/NavigationButtons";

axios.defaults.baseURL = "http://localhost:3030";

function App() {
  const [todos, setTodos] = useState(null);
  const [page, setPage] = useState(1);
  const [maxPageCount, setMaxPageCount] = useState();
  //bileşen ekrana basılır
  useEffect(() => {
    //apiden todo  verileri alınır
    axios
      .get("/todos", {
        timeout: 3000,
        timeoutErrorMessage: "zaman aşımı",
        params: {
          _page: page,
          _per_page: 5,
        },
      })
      .then((res) => {
        setTodos(res.data.data);
        setMaxPageCount(res.data.pages);
      })
      .catch((error) => {
        if (error.message === "zaman aşımı") {
          alert("istek zaman aşımına uğradı");
        }
      });
  }, [page]);

  return (
    <div className="container p-5">
      <h2 className="text-center my-5">
        Server <span className="text-warning">CRUD</span>
      </h2>
      <Form setTodos={setTodos} />

      <ul className="list-group">
        {!todos ? (
          <Loader />
        ) : (
          todos.map((todo) => (
            <ListItem
              todos={todos}
              setTodos={setTodos}
              key={todo.id}
              todo={todo}
            />
          ))
        )}
      </ul>

      <NavigationButtons
        maxPageCount={maxPageCount}
        page={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
