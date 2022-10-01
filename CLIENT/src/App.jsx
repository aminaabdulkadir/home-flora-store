import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Products from './components/Products';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state)=> state.user.currentUser);
  
  return (
      <Routes>
        <Route path= "/" element={<Home/>} />
        <Route path= "/products" element={<Products/>} />
        <Route path= "/products/:category" element={<ProductList/>} />
        <Route path= "/product/:id" element={<Product/>} />
        <Route path= "/cart" element={user
        ? <Cart/>
        : <Navigate to="/login"/>} /> 
        <Route path= "/success" element={<Success/>} />
        <Route path= "/login" element={user 
          ? <Navigate to="/"/>
          : <Login/>} />
        <Route path= "/register" element={user 
          ? <Navigate to="/"/> 
          :<Register/>} />
      </Routes>

  );
};

export default App;
