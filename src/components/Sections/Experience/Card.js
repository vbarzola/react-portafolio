import React from 'react'

import './Card.css'

const Badge = ({ children}) => {
  return (
    <span
      className={`
        inline-block text-xs 
        px-2 py-1 rounded-full tracking-wide
        text-skin-base
        bg-skin-accent-opacity-50
      `}
    >
      {children}
    </span>
  )
}

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-8 rounded-lg mb-4 card-experience">
      <div className="text-skin-base font-bold text-sm whitespace-nowrap mr-8 mt-[8px]">2022 - PRESENT</div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-skin-accent">Lead Engineer - Upstatement</h2>
        <h4 className="text-lg font-semibold text-skin-base">Senior Engineer</h4>
        <p className="text-skin-base text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        
        <div className="flex space-x-2 mt-4">
          <Badge variant="secondary" className="text-sm">
            JavaScript
          </Badge>
          <Badge variant="secondary" className="text-sm">
            JavaScript
          </Badge>
        </div>
      </div>
    </div>
  )
}

export default Card