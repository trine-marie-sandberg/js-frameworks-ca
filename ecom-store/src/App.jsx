import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Page2 from "./pages/page1";
import Header from './components/header';

export default function App() {

  return (

    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
        <Route path="home" element={<Home/>}></Route>
        <Route path="page2" element={<Page2/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}