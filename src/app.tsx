import './app.scss';
import { AboutUs } from './pages/aboutUs/aboutUs';
import { BurgerMenu } from './shared/components/burgerMenu/burgerMenu';
import { Category } from './pages/category/category';
import { CheckOut } from './pages/checkOut/checkOut';
import { Header } from './shared/components/header/header';
import { Home } from './pages/home/home';
import { NotFound } from './pages/notFound/notFound';
import { Product } from './pages/product/product';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ShoppingCart } from './pages/shoppingCart/shoppingCart';
import { SignUp } from './pages/sign-up/signUp';
import { Subscription } from './pages/subscription/subscription';
import Footer from './shared/components/footer/footer';
import QRCodeGenerator from './shared/components/qrCodeGenerator/qrCodeGenerator';

export const App = () => {
  const location = useLocation();
  const excludeHeaderFooterPaths = ['/qr'];

  const shouldRenderHeaderFooter = !excludeHeaderFooterPaths.includes(location.pathname);

  return (
    <div className="app">
<<<<<<< HEAD
      {shouldRenderHeaderFooter && <Header />}
=======
      <SignUp />
      <ShoppingCart />
      <Header />
>>>>>>> 45b3fd8 (burger-menu done without transition)
      <Routes>
        <Route index element={<Home />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/qr" element={<QRCodeGenerator />} />
      </Routes>
      {shouldRenderHeaderFooter && <Footer />}
    </div>
  );
};
