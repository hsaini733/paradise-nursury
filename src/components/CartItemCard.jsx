import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from './CartSlice';
import './CartItem.css';

const CartItemCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    } else {
      dispatch(removeItem(id));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const calculateTotalCost = (price, quantity) => {
    return (price * quantity).toFixed(2);
  }

  return (
    <div className="cart-item-container">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>Unit Price: ${item.price}</p>
        <p>Total Cost: ${calculateTotalCost(item.price, item.quantity)}</p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange(item.id, item.quantity, -1)}>-</button>
          <span style={{ margin: '0 10px' }}>{item.quantity}</span>
          <button onClick={() => handleQuantityChange(item.id, item.quantity, 1)}>+</button>
        </div>
      </div>
      <button onClick={() => handleRemove(item.id)} className="cart-item-delete">Delete</button>
    </div>
  );
};

export default CartItemCard;
