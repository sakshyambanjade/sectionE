import React from 'react';

export default function App() {
  return (
    <div className='bg-image hover-overlay center '>
      <img src='https://www.knowledgeplus.mu/assets/img/courses/WT.jpg' className='center '  />
      <a href='#!'>
        <div className='mask overlay' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </div>
  );
}