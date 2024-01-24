import React from 'react';

export default function App() {
  return (
    <div className='bg-image hover-overlay center '>
      <img src='https://contentstatic.techgig.com/photo/90325682.cms' className='center '  />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
  );
}