import { HashRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FeaturedProducts from './pages/FeaturedProducts';
import ProductList from './pages/ProductList';
import News from './pages/News';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <HashRouter>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/featured" element={<FeaturedProducts />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/orders" element={<OrderHistory />} />
            </Routes>
          </main>
          <Footer />
        </HashRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;