import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles.css";

const catMenu = [
  { id: 1, name: "Pepper", price: 120, image: require("../assets/1.png"), url: "http://oefentoets-frontend-1:8001/1.html" },
  { id: 2, name: "Netacat", price: 100, image: require("../assets/2.png"), url: "http://oefentoets-frontend-1:8001/2.html" },
  { id: 3, name: "David", price: 150, image: require("../assets/3.png"), url: "http://oefentoets-frontend-1:8001/3.html" },
  { id: 4, name: "Hashcat", price: 140, image: require("../assets/4.png"), url: "http://oefentoets-frontend-1:8001/4.html" },
  { id: 5, name: "Charlie", price: 130, image: require("../assets/5.png"), url: "http://oefentoets-frontend-1:8001/5.html" },
  { id: 6, name: "Knipoog", price: 180, image: require("../assets/6.png"), url: "http://oefentoets-frontend-1:8001/6.html" },
  { id: 7, name: "Script Kitten", price: 170, image: require("../assets/7.png"), url: "http://oefentoets-frontend-1:8001/7.html" },
  { id: 8, name: "Je moeder", price: 160, image: require("../assets/8.png"), url: "http://oefentoets-frontend-1:8001/.html" }
];

function Shop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (cat) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === cat.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === cat.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...cat, quantity: 1 }];
      }
    });
  };


  const [url, setUrl] = useState('http://oefentoets-frontend-1:8001');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5050/fetch-data`, {
        params: { url }
      });

      setData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error details:', err);
      setError('Failed to fetch data');
      setData(null);
    }
  };
  
  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="cat-grid">
        {catMenu.map((cat) => (
          <div key={cat.id} className="cat-card">
            <img src={cat.image} alt={cat.name} className="cat-image" />
            <h2>{cat.name}</h2>
            <p>€{cat.price}</p>
            <button onClick={() => addToCart(cat)}>Add to Cart</button>
      <button onClick={handleFetchData}>More details</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
              <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: data }}
              />
            )}
          </div>
        ))}
      </div>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Shop;
