import React from 'react';

export default function App() {
  return (
    <div className='bg-image hover-overlay center '>
      <img src='https://www.sourcesecurity.com/img/news/920/network-cables-920b.png' className='center '  />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
  );
}