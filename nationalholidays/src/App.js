import React, { useState } from 'react';
import './App.css';
import data from './data';

function App() {
  const [holidays, setHolidays] = useState(data);
  const deleted = (id) => {
    const newarray = holidays.filter((holiday) => (holiday.id !== id))

    setHolidays(newarray)
  }
  return (
    <main>
      <section className='container'>
        <h3>National Holidays Dates</h3>
        {holidays.map((holiday) => {
          return (
            <div key={holiday.id} className="holiday">
              <img src={holiday.img} />
              <div>
                <p>{holiday.title}</p>
                <p>{holiday.date}</p>
              </div>
              <button onClick={() => deleted(holiday.id)}>Clear All</button>
            </div>
          )
        })}

      </section>
    </main>
  );
}

export default App;
