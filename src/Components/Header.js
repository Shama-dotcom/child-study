import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <>
      <div className="header">
        <div className="header-nav">
          <Link to='/kg' >
          <h2>KG</h2>
          </Link>
          <Link to="/Class1">
            <h2>Class-I</h2>
          </Link>
          <Link to="/class2">
            <h2>Class-II</h2>
          </Link>
          <Link to="/class3">
            <h2>Class-III</h2>
          </Link>
          <Link to="/class4">
            <h2>Class-IV</h2>
          </Link>
          <Link to="/class5">
            <h2>Class-V</h2>
          </Link>
          </div>
      </div>
      <div className='fp'>
      <h3 className='fp-1'>Hello Childrens, Lets learn Something Different...</h3>
      <h2 className='fp-3'> We always help you to grow your skills day by day ...   And Makes your future Bright..</h2>
      </div>
    </>
  );
}

export default Header;
