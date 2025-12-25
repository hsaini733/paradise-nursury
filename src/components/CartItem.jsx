import React from 'react';
import { useSelector } from 'react-redux';
import CartItemCard from './CartItemCard';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector((state) => state.cart.items);

  const handleCheckout = () => {
    alert('Coming Soon');
  };

  const totalCartAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItemCard key={item.id} item={item} />
          ))}
          <h3>Total Cart Amount: ${totalCartAmount.toFixed(2)}</h3>
        </div>
      )}
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
};

export default CartItem;
