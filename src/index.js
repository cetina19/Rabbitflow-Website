import React from 'react';
import {hydrate, render}  from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'
//import * as serviceWorker from './serviceWorkerRegistration.ts';
//import './service-worker.ts';


const rootElement = document.getElementById("root");
if(rootElement.hasChildNodes()){
  hydrate(<React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,rootElement);
} else {
  render(<React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,rootElement);
}


/*ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);*/

serviceWorker.unregister();       //change here in later parts



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
