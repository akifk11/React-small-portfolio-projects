import { useState } from 'react';
import './App.css';
import JSON_DATA from "./MOCK_DATA.json"


function App() {
  const [search, setSearch] = useState("")
  return (
    <div className="App">
      <input type="text" onChange={(e) => setSearch(e.target.value)} />
      {JSON_DATA.filter((val) => {
        if (val == "") {
          return val
        } else if (val.first_name.toLowerCase().includes(search)) {
          return val
        }
      }).map((val, index) => (
        <div key={index}>
          <p>{val.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
