import './App.css';
import Home from './component/Home';
import Products from './component/Products';
import Contact from './component/Contact';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Regiter';
import { Provider } from "react-redux";
import Navbar  from './component/Navbar';
import Cart from './component/Cart';
import { Routes, Route } from 'react-router-dom';
import Product from './component/Product';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Corrected import
function App() {
  return (

    <>
       <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>

        
      </Routes>
    </>

  );
}
export default App;
