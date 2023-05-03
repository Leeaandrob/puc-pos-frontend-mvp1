import "./App.css";
import Menu from "./Menu";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  const deleteProduct = async (p) => {
    const response = await fetch(`http://127.0.0.1:5000/api/products/${p}`, {
      method: "DELETE",
    });
    alert(response.data);
  };

  return (
    <div className="App">
      <Menu />
      <div>
        <h1>Products page</h1>
        <div class="container">
          <table class="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <>
                    <tr>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td class="edit-buttons">
                        <button onClick={() => deleteProduct(product.id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
