import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('sweetcrumbs_cart');
      const savedOrders = localStorage.getItem('sweetcrumbs_orders');
      if (savedCart) setItems(JSON.parse(savedCart));
      if (savedOrders) setOrders(JSON.parse(savedOrders));
    } catch {
      /* ignore corrupt data */
    }
  }, []);

  const saveCart = (newItems) => {
    setItems(newItems);
    localStorage.setItem('sweetcrumbs_cart', JSON.stringify(newItems));
  };

  const saveOrders = (newOrders) => {
    setOrders(newOrders);
    localStorage.setItem('sweetcrumbs_orders', JSON.stringify(newOrders));
  };

  const addToCart = (product) => {
    const existing = items.find((item) => item.id === product.id);
    if (existing) {
      const updated = items.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      saveCart(updated);
    } else {
      saveCart([...items, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    saveCart(items.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    const updated = items.map((item) =>
      item.id === productId ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  const clearCart = () => saveCart([]);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = (username) => {
    if (items.length === 0) return false;
    const order = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      items: [...items],
      total: totalPrice,
      date: new Date().toISOString(),
      username,
    };
    const newOrders = [order, ...orders];
    saveOrders(newOrders);
    clearCart();
    return true;
  };

  const getOrdersByDate = useCallback(() => {
    const grouped = {};
    orders.forEach((order) => {
      const dateKey = new Date(order.date).toLocaleDateString('en-CA');
      if (!grouped[dateKey]) grouped[dateKey] = [];
      grouped[dateKey].push(order);
    });
    return grouped;
  }, [orders]);

  return (
    <CartContext.Provider
      value={{
        items,
        totalItems,
        totalPrice,
        orders,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        placeOrder,
        getOrdersByDate,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}

export { CartContext };
