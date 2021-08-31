import React, { useCallback, useEffect, useState } from 'react';

import './App.css';
import { Cart } from './components/Cart';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

let products = [
  {
    id: 1,
    title: "Pocket Knife",
    price: 35,
    imageUrl: "https://i0.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/SwissArmyKnife.jpg?w=550&ssl=1"
  },
  {
    id: 2,
    title: "Trail Mix",
    price: 12,
    imageUrl: "https://m.media-amazon.com/images/I/91P47phWyUL._AC_SL1500_.jpg"
  },
  {
    id: 3,
    title: "Rain Gear",
    price: 59,
    imageUrl: "https://i2.wp.com/scoutingmagazine.org/wp-content/uploads/2013/02/MarmotPrecip.jpg?w=550&ssl=1"
  },
]

const LoadProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => resolve(products), 500)
  });
}

const App = () => {
    const [items, setItems] = useState([])
    const [{products, l}, setProducts] = useState({products: [], l: true})

    useEffect(() => {
      (async () => {
        const result = await LoadProducts()
        setProducts({products: result, l: false})
      })()
    }, [])

    if (!l) {
      return (
        <div className="main">
          <Header/>
          <ProductList products={products} setItems={setItems}/>
          <Cart items={items} />
          <footer>
            <hr/>
            <p>
              <span>Scout Essentials by CSC Engineering, 2021. </span>
              <a href="https://jobs-cscgeneration.icims.com/jobs">Join Us!</a>
            </p>
          </footer>
        </div>
      );
    }

    return 'Loading...'
  }

export default App;
