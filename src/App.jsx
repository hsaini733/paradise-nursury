import { useState } from 'react';
import './App.css';
import backgroundImage from './assets/paradise_background.png';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import { useSelector } from 'react-redux';

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  const handleShowHome = () => {
    setShowAboutUs(false);
    setShowProductList(false);
    setShowCart(false);
  };

  const handleShowAboutUs = () => {
    setShowAboutUs(true);
    setShowProductList(false);
    setShowCart(false);
  };

  const handleShowProductList = () => {
    setShowProductList(true);
    setShowAboutUs(false);
    setShowCart(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
    setShowProductList(false);
    setShowAboutUs(false);
  };

  return (
    <>
      <div className="app-container" style={{backgroundImage: `url(${backgroundImage})`}}>
        <div className="logo">

          <header>
            <nav>
              <a href="#" onClick={(e) => { e.preventDefault(); handleShowHome(); }}>Home</a>
              {' | '}
              <a href="#" onClick={(e) => { e.preventDefault(); handleShowAboutUs(); }}>About Us</a>
              {' | '}
              <a href="#" onClick={(e) => { e.preventDefault(); handleShowProductList(); }}>Plants</a>
              {' | '}
              <a href="#" onClick={(e) => { e.preventDefault(); handleShowCart(); }}>
                Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
              </a>
            </nav>
          </header>
          <hr />

          <main>
            {showAboutUs ? (
              <AboutUs />
            ) : showProductList ? (
              <ProductList />
            ) : showCart ? (
              <CartItem onContinueShopping={handleShowProductList} />
            ) : (
              <div style={{ textAlign: 'center' }}>
                <h1>Welcome to Paradise Nursery</h1>
                <p>Your one-stop shop for the most beautiful and exotic plants.</p>
                <button onClick={handleShowProductList} style={{ marginTop: '1rem' }}>
                  Get Started
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
