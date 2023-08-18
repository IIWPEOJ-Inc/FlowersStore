import './App.scss';
import { AboutUs } from './pages/AboutUs/AboutUs';
import { Category } from './pages/Category/Category';
import { CheckOut } from './pages/CheckOut/CheckOut';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { NotFound } from './pages/NotFound/NotFound';
import { Product } from './pages/Product/Product';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './pages/ShoppingCart/ShoppingCart';
import { Subscription } from './pages/Subscription/Subscription';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="category" element={<Category />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="product" element={<Product />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};
