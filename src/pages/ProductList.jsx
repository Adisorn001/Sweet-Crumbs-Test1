import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './ProductList.css';

export default function ProductList() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast('Added to cart!');
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="page products-page fade-in">
      <div className="container" style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="section-title">Our Products</h1>
          <p className="section-subtitle">Explore our full menu</p>
        </div>

        <div className="products__grid">
          {products.map(product => (
            <div key={product.id} className="products__card">
              <img src={product.image} alt={product.name} className="products__card-image" />
              <div className="products__card-body">
                <h3 className="products__card-name">{product.name}</h3>
                <div className="products__card-price">฿{product.price}</div>
                <button 
                  className="btn btn-accent btn-sm"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {toast && (
        <div className="toast toast--success">
          {toast}
        </div>
      )}
    </div>
  );
}