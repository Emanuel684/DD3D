import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Dibujo from './Dibujo';


ReactDOM.render(
  <React.StrictMode>
    <Dibujo />
  </React.StrictMode>,
  document.getElementById('root')
);
