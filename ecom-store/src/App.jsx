import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Cart from "./pages/cart";
import Layout from "./components/layout";

export default function App() {

  return (

    <BrowserRouter>
    <Layout>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}