import React from 'react'

function QuoteButton({newQuote, newColor}) {
  return (
    <button onClick={newQuote} className='button--next' style={{backgroundColor: newColor}}>
      <i class='bx bx-right-arrow-circle'></i>
    </button>
  )
}

export default QuoteButton