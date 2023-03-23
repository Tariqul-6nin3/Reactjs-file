import logo from "./logo.svg";
import "./App.css";

function App() {
  
}
function Product(props) {
  console.log(props);
  return (
    <div className="product-cart">
      <h3>Name:{props.name}</h3>
      <p>Price:{props.price}</p>
    </div>
  );
}

export default App;
