import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import samplePlant from '../assets/sample_plant.png';
import './ProductList.css';

const plants = {
  indoor: [
    { id: 1, name: 'Snake Plant', price: 25, image: samplePlant },
    { id: 2, name: 'Pothos', price: 20, image: samplePlant },
    { id: 3, name: 'ZZ Plant', price: 30, image: samplePlant },
    { id: 4, name: 'Monstera', price: 45, image: samplePlant },
    { id: 5, name: 'Fiddle Leaf Fig', price: 55, image: samplePlant },
    { id: 6, name: 'Rubber Plant', price: 35, image: samplePlant },
  ],
  outdoor: [
    { id: 7, name: 'Rose Bush', price: 40, image: samplePlant },
    { id: 8, name: 'Lavender', price: 15, image: samplePlant },
    { id: 9, name: 'Hydrangea', price: 50, image: samplePlant },
    { id: 10, name: 'Jasmine', price: 25, image: samplePlant },
    { id: 11, name: 'Boxwood', price: 35, image: samplePlant },
    { id: 12, name: 'Fern', price: 20, image: samplePlant },
  ],
  succulents: [
    { id: 13, name: 'Echeveria', price: 10, image: samplePlant },
    { id: 14, name: 'Sedum', price: 8, image: samplePlant },
    { id: 15, name: 'Aloe Vera', price: 12, image: samplePlant },
    { id: 16, name: 'Crassula', price: 15, image: samplePlant },
    { id: 17, name: 'Sempervivum', price: 10, image: samplePlant },
    { id: 18, name: 'Gasteria', price: 12, image: samplePlant },
  ],
};

const prettyCategoryName = (category) => {
    switch (category) {
        case 'indoor':
            return 'Indoor Plants';
        case 'outdoor':
            return 'Outdoor Plants';
        case 'succulents':
            return 'Succulents';
        default:
            return category;
    }
};

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isItemInCart = (plantId) => {
    return cartItems.some((item) => item.id === plantId);
  };

  return (
    <div className='product-list-container'>
      {Object.keys(plants).map((category) => (
        <div key={category} className='plant-category'>
          <h2 className='plant-category-title'>{prettyCategoryName(category)}</h2>
          <div className='plant-list'>
            {plants[category].map((plant) => (
              <div key={plant.id} className='plant-card'>
                <img src={plant.image} alt={plant.name} className='plant-image' />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)} disabled={isItemInCart(plant.id)}>
                  {isItemInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
