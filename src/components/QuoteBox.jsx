import React from 'react'

function QuoteBox({quote, newColor}) {
  return (
    <div className='container-quote' style={{color: newColor}}>
      <p>{quote.quote}</p>
      <h3>{quote.author}</h3>
      <i class='quote--icon bx bxs-quote-alt-left'></i>   
    </div>
  )
}

export default QuoteBox