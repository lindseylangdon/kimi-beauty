import React from 'react';

export default function CatGif() {
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}/cat-phone.gif`} alt="Cat with a phone" className="w-1/5 lg:w-3/4 md:w-1/6 sm:w-1/6"/>
    </div>
  );
}

