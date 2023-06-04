import "./App.css";
import { ProductListing } from "./pages/ProductListing";
import { Cart } from "./pages/Cart";
import { products } from "./backend/db/products.js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <h1 className="brand-title">
          Welcome to <span> Hi Project!</span>
        </h1>
        </header>
   
    
      <Home/>
      <Routes>
        <Route path="/" element={<ProductListing products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  

  )
    
  
}

export default App;
