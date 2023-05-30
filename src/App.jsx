import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Cart from "./pages/cart";
import CartPage from "./components/cart/cartreducer";
import Layout from "./components/layout";
import ProductPage from "./pages/product";
import NotFound from "./pages/404";

export default function App() {

  return (

    <BrowserRouter>
    <Layout>
    <Routes>
      <Route index element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<CartPage/>} />
        <Route path="product/:id" element={<ProductPage/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}