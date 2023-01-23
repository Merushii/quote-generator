import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import db from './db.json'
import QuoteButton from './components/QuoteButton'

function App() {
  const arrayColors = ["#BCC4DB", "#c0a9b0", "#7880b5", "#6987c9", "#6bbaec", "#84acce"]

  const getRandom = (arrayElements) => {
    const values = arrayElements.length
    const arrayIndex = Math.floor(Math.random() * values)
    return arrayElements[arrayIndex]
  }

  const [quote, setQuote] = useState(getRandom(db));
  const [color, setColor] = useState(getRandom(arrayColors))

  const newQuote = () => {
    setQuote(getRandom(db))
    setColor(getRandom(arrayColors))
  }
  
  const oldQuote = () => {
    
  }

  return (
    <div className="App" style={{backgroundColor: color}} >
      <h1>Quote Generator</h1>
      <div className='container'>
      <QuoteBox quote = {quote} newColor = {color}/>
      <QuoteButton newQuote = {newQuote} newColor = {color}/>
      </div>      
    </div>
  );
}

export default App
