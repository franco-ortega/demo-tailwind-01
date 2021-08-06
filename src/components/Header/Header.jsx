import React from 'react';

const Header = () => {
  return (
    <header className={`
      bg-green-300
      
      p-4
      flex
      flex-col
      items-center

      sm:bg-green-200
      md:bg-green-300
      lg:bg-green-400
      xl:bg-green-500
      2xl:bg-green-600`}>
      <h1 className={`
        bg-blue-100
        bg-opacity-75
        border-2
        border-black
        border-opacity-75
        rounded-full

        flex
        self-center
        text-3xl
        leading-3

        sm: p-4
        
      `}>Opus Impendum</h1>
    </header>
  );
};

export default Header;
