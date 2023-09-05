import './App.scss';
import { AboutUs } from './pages/aboutUs/AboutUs';
import { Category } from './pages/category/Category';
import { CheckOut } from './pages/checkOut/CheckOut';
import { Header } from './shared/components/header/Header';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import { Product } from './pages/product/Product';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './pages/shoppingCart/ShoppingCart';
import { Subscription } from './pages/subscription/Subscription';
import Footer from './shared/components/footer/Footer';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="category" element={<Category />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="product" element={<Product />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
