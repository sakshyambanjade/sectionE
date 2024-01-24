import React from 'react';

export default function App() {
  return (
    <div className='bg-image hover-overlay center '>
      <img src='https://miro.medium.com/v2/resize:fit:600/0*7zMicw-FfThCbN35.png' className='center '  />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
  );
}