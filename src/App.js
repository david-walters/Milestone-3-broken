import React, { useState } from 'react';
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";

function App() {

  const [count, setCount] = useState(0);
  const [itemTotal, setItemTotal] = useState(0)



  return (
    <div className="App">
      <Header count={count}
              setCount={setCount}
              itemTotal={itemTotal}
              setItemTotal={setItemTotal}/>

      <ProductImage count={count}
                    setCount={setCount}
                    itemTotal={itemTotal}
                    setItemTotal={setItemTotal}/>
    </div>
  );
}

export default App;
