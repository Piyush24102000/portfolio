import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbars from './Navbars';
import Main from './Main';
import ReactDOM from 'react-dom';
import Skills from './skills.jsx';
import Demo from './Demo';
import About from './about.jsx';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link, browserHistory, IndexRoute } from 'react-router'


ReactDOM.render(
  <React.StrictMode>
 
    <App/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();