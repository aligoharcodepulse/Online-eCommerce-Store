import { useState } from 'react';
import '../index.css';
import Products from './Products';

const LandingPage = () => {
    const [showProducts, setShowProducts] = useState(false);

    // Logic to show/hide Products component based on some condition
    const toggleProducts = () => {
        setShowProducts(!showProducts);
    };

    return (
      <div className="container">
          {!showProducts && (
              <>
                  <h1>This is an <span>Online E-Commerce Platform</span></h1>
                  <h1>Where you can buy several products.</h1>
                  <h1>If you want to toggle the products here</h1>
                  <h1>then click on below toggle products button</h1>
                  <h1>else move to the products section in navbar</h1>
                  <button onClick={toggleProducts}>Toggle Products</button>
              </>
          )}
          {showProducts && <Products />}
      </div>
  );
};

export default LandingPage;
