import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap'
import './app.css'
import '../src/assets/scss/App.scss';
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render( 
      <BrowserRouter>
          <App />
      </BrowserRouter>
)
