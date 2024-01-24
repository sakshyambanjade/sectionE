import React from 'react';

export default function App() {
  return (
    <div className='bg-image hover-overlay center '>
      <img src='https://miro.medium.com/v2/resize:fit:627/1*kOKhUX6Vr2TFqi8vDK1qnQ.png' className='center '  />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
  );
}