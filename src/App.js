import React from 'react';
import './App.css';
import { Button, styled } from '@mui/material';
import Category from './components/Category';
import Location from './components/Location';

const Btn = styled(Button)`
 font-weight: 600;
 color: #fff;
 border: 1px solid #fff;
 margin-left: 30px;

 &:hover{
  color: #1976d2;
}

`;


function App() {
  return (
    <div className="App">
      <div id="main">
        <div id="box1"></div>

        <div id="box2">
          <div id="text">
            <span style={{ fontSize: 120 }}>ECOMMERCE </span>
            <span style={{ fontSize: 120 }}>SHOPPING</span>
          </div>
        </div>

        <div id="box3">
          <div id="container">
            <div id="logo" >
              <img src="https://www.buzzgully.com/assets/img/logo-main.svg" alt='' style={{filter: 'invert(100%)'}}/>
              <Button variant='text'>
                <Location />
                <Category />
              </Button>
            </div>


            <div id="menu">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Service</li>

                <Btn variant='outlined' style={{marginLeft: 60}}>Book Now</Btn>
                <Btn variant='outlined'>Login</Btn>
              </ul>

            </div>


          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
