import React from "react";
import { useState } from "react";
import Counter from "./pages/Counter/counter";
import Form from "./pages/Form/Form";
import "./app.css";

const App = () => {
  const [page, setPage] = useState("formPage");

  return (
    <div className="app">
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button
          onClick={() => setPage("counterPage")}
          className="btn btn-primary"
        >
          Counter Page
        </button>
        <button onClick={() => setPage("formPage")} className="btn btn-warning">
          Form Page
        </button>
      </div>
      {page === "counterPage" ? <Counter /> : <Form />}
    </div>
  );
};

export default App;
