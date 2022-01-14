/** @format */

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context';

import '../css/App.css';
import { ButtonContainer } from './Button';

export default function Navbar() {
  const context = useContext(ProductContext);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-sm-5 sticky-top'>
      <div className='container-fluid'>
        <Link to='/'>
          <p alt='store' className='navbar-brand'>
            ShopHub
          </p>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#main-navbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='main-navbar'>
          <div className='navbar-nav ms-auto'>
            <Link to='/' className='link'>
              <div className='nav-link active'>Products</div>
            </Link>
            <Link to='/signin' className='link'>
              <div className='nav-link'>Sign In</div>
            </Link>
          </div>
          <Link to='/cart'>
            <ButtonContainer className='cart-icon'>
              <i className='fas fa-cart-plus'></i>
              <span className='d-md-none d-xs-block ms-2 title'>
                My Shopping Cart
              </span>
              <span className='m-2'>
                <span className='badge bg-secondary'>
                  {context.cart.length}
                </span>
              </span>
            </ButtonContainer>
          </Link>
        </div>
      </div>
    </nav>
  );
}
