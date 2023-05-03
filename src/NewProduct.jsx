import React from "react";
import "./App.css";
import Menu from "./Menu";

function NewProduct() {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  const save = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ name, description }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    };

    const response = await fetch(
      "http://127.0.0.1:5000/api/products",
      requestOptions
    );
    alert(response.data);
  };

  return (
    <div className="App">
      <Menu />
      <div>
        <h1>New Product page</h1>
      </div>
      <div>
        <form onSubmit={save}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Product Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              placeholder="Product description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewProduct;
