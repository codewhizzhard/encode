import React from 'react'

const Footer = () => {
    const year = new Date()
  return (
    <footer className="text-center h-[10vh] bg-gray-700 text-white">
        <p>copyright &copy;  <b>{year.getFullYear()}</b></p>
    </footer>
  )
}

export default Footer