import '../css/cursorfollower.css';
import React, { useState, useEffect } from 'react';


const CursorFollower = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor-follower" 
    style=
    {{ 
      left: cursorPosition.x, top: cursorPosition.y 
    }}>
    </div>
  );
};

export default CursorFollower;