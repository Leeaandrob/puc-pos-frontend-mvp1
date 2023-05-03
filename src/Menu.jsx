import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <header className="App-header">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/new-product">New Product</Link>
        </li>
      </ul>
    </header>
  );
}
