import React from 'react';

import './loader.css';

const Loader = () => {
  const arrSpan: number[] = new Array(20).fill(0).map((item, index) => {
    return index + 1;
  });
  return (
    <div className="loader">
      <div className="containerLoader">
        <div className="circle">
          {arrSpan.map((item, index) => {
            return <span key={index} style={{ '--i': item } as React.CSSProperties}></span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Loader;
