import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [items, setItems] = useState()
  const [visiable, setVisiable] = useState()

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
      .then((res) => res.json())
      .then((data) => setItems(data.meals))
  }, [])
  console.log(items)
  return (
    <div className="App">
      <h1>Bristh Meals </h1>
      <div className='container'>
        {items.slice(0, 3).map(item => (
          <div className='card'>
            <div className='image'>
              <img src={item.strMealThumb} />
            </div>
            <p>{item.strMeal}</p>
          </div>
        ))}

      </div>



    </div>
  );
}

export default App;
