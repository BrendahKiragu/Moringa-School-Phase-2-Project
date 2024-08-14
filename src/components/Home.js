import React from 'react';
import profilepic from './images/profpic.avif';

function Home() {
  return (
    <div className="Home">
      <h1>Hi, I'm Thriver Coder 03</h1>
      <p>Full Stack Developer based in Nairobi, Kenya</p>
      <img src={profilepic} alt="profilepic" />
      <p>Coding Your Dreams into Reality, One Code Line at a Time.</p>
    </div>
  );
}

export default Home;