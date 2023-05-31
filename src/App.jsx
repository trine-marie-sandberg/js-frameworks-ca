import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Cart from "./pages/cart";
import Layout from "./components/layout";
import ProductPage from "./pages/product";
import NotFound from "./pages/404";

export default function App(cartState) {

  return (

    <BrowserRouter>
    <Layout>
    <Routes>
      <Route index element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="product/:id" element={<ProductPage/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Layout>
    </BrowserRouter>
  )
}