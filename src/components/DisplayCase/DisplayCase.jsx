import React from 'react';

const DisplayCase = () => {
  return (
    <main className={`
      bg-red-100
      bg-gradient-to-r from-red-400 via-yellow-200 to-blue-300
      h-screen
      p-5
      
      flex
      flex-col
      items-center
      
    `}>
      <h2 className={`
        pb-4
        text-2xl
        text-center
      `}>A World Reborn...</h2>
      
      <img
        src="https://wallup.net/wp-content/uploads/2016/01/28325-fantasy_art-Tera.jpg"
        alt="Fantasy city on a mountain."
        className={`
            p-0
            max-w-full
            sm:max-w-lg
            md:max-w-xl
            `}
      />
      <p className={`
        pt-4
        text-2xl
    `}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veritatis, alias, cum doloremque suscipit delectus, ratione praesentium hic laborum mollitia consequuntur? Voluptatibus, repellendus. Eum veniam fugit deleniti obcaecati nisi atque!
      </p>
    </main>
  );
};

export default DisplayCase;
