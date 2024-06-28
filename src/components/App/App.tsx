import React from 'react';
import './App.module.css';
import { Right } from '../Right';
import { Left } from '../Left';

export const App = () => {
  return (
    <div className='App'>
      <Right />
      <Left />
    </div>
  );
};
