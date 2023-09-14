import './app.scss';
import { AboutUs } from './pages/aboutUs/aboutUs';
import { Category } from './pages/category/category';
import { CheckOut } from './pages/checkOut/checkOut';
import { Header } from './shared/components/header/header';
import { Home } from './pages/home/home';
import { NotFound } from './pages/notFound/notFound';
import { Product } from './pages/product/product';
import { Route, Routes } from 'react-router-dom';
import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
import { Subscription } from './pages/subscription/subscription';
import Footer from './shared/components/footer/footer';

export const App = () => {
  return (
    <div className="app">
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
