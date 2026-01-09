import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/home/HomePages";
import Layout from "./components/Layout";
import CartPage from "./pages/cart/CartPage";
import LikePage from "./pages/likee/LikePage";
import ProductsPage from "./pages/products/ProductsPage";
import SinglePage from "./pages/single/SinglePage";
import RegisterPage from "./pages/register/RegisterPage";

const App = () => {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePages />} />
            <Route path="cart" element={<CartPage/>}/>
            <Route path="likee" element={<LikePage/>}/>
            <Route path="products" element={<ProductsPage/>}/>
            <Route path="products/:id" element={<SinglePage/>}/>
            <Route path="register" element={<RegisterPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
};

export default App;