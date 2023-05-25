import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type='button' className={`get-quote-btn-grad font-barlow rounded-md font-medium text-[18px] text-white outline-none w-[150px] h-[40px] ${styles}`}>Get Quote</button>
  )
}

export default Button