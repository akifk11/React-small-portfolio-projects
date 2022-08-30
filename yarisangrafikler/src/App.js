import React, { useState, UseEffect, useEffect } from "react"
import './App.css';

function App() {

  const getRandomValue = () => {
    return Math.floor(Math.random() * 10 + 1)
  }

  const [bars, setBars] = useState([
    {
      id: 1,
      title: "facebook",
      color: "blue",
      value: getRandomValue()
    },
    {
      id: 2,
      title: "amazon",
      color: "orange",
      value: getRandomValue()
    },
    {
      id: 3,
      title: "tesla",
      color: "red",
      value: getRandomValue()
    },
    {
      id: 4,
      title: "google",
      color: "purple",
      value: getRandomValue()
    },
    {
      id: 5,
      title: "netflix",
      color: "pink",
      value: getRandomValue()
    },
  ])
  const [totalValue, setTotalValue] = useState(0)
  const sortingBars = (data) => {
    let sorted_array = data.sort((a, b) => b.value - a.value)
    return sorted_array
  }

  const BarWidthRandom = () => {
    let data = [...bars]
    let total = totalValue
    data.forEach((company) => {
      company.value += getRandomValue()
      total += company.value
    })
    setTotalValue(total)
    let sorted_arr = sortingBars(data)
    setBars(sorted_arr)
  }

  useEffect(() => {
    setInterval(() => {
      BarWidthRandom()
    }, 300)
  }, [])

  const renderItems = ((company) => {
    let percent
    percent = (company.value * 100) / totalValue
    return percent
  })

  return (
    <div className="App">
      {bars.map((company, index) => {
        let percent = String(renderItems(company)) + "%"
      })}
    </div>
  );
}

export default App;
