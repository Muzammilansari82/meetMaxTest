// MyContext.js
import  { createContext, useState,  useEffect } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

function MyProvider({ children }) {
  const [photos, setPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPhotos(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const toggleFavorite = (id) => {
    setPhotos(prevPhotos => {
      return prevPhotos.map(photo => {
        if (photo.id === id) {
          return { ...photo, isFavorited: !photo.isFavorited };
        }
        return photo;
      });
    });
    console.log('Toggle favorite called for id:', id);
  };

  const addToCart = (item = null, photo = null) => {
    if (item !== null) {
      // If an item is provided, add it to the cart
      setCartItems(prevItems => [...prevItems, item]);
      console.log('Added to cart:', item);
    } else if (photo !== null) {
      // If a photo is provided, add it to the cart
      setCartItems(prevItems => [...prevItems, photo]);
      console.log('Added to cart:', photo);
    }
  };
  
  const removeFromCart = (item) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== item.id));
  };

  const placeOrder = () => {
    setIsOrdering(true);
    setTimeout(() => {
      setIsOrdering(false);
      setCartItems([]);
      console.log('Order placed!');
    }, 3000);
  };

  const calculateTotalCost = () => {
    const itemCost = 5.99; 
    const totalCost = cartItems.length * itemCost;
    return (
      totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" }));
  };

  const value = {
    photos,
    cartItems,
    toggleFavorite,
    addToCart,
    removeFromCart,
    placeOrder,
    calculateTotalCost,
    isOrdering,
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
    
  );
}
MyProvider.propTypes = {
    children: PropTypes.node, 
  };

export { MyContext, MyProvider };
