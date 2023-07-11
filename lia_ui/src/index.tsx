import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeSwitcher from './components/ThemeSwitcher';
import Feedback from './components/Feeadback';
import Header from './components/Header';


/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/


/*const HtmlToReactParser = require('html-to-react').Parser;
const parser = new HtmlToReactParser();
console.log(parser)

const headerElement = document.getElementById('header');
const headerChildren = headerElement?.innerHTML;
console.log(1, headerChildren);
const headerChildrenJSX = headerChildren? parser.parse(headerChildren) : <div>33</div>;
console.log(2, headerChildrenJSX, parser.parse(headerChildren)) ;
const header = ReactDOM.createRoot(
  headerElement as HTMLElement
);

header.render(
  <React.StrictMode>
   <Header>
    {headerChildrenJSX}
   </Header>
  </React.StrictMode>
);*/


/*const switchThemeButton = ReactDOM.createRoot(
  document.getElementById('switchTheme') as HTMLElement
);
switchThemeButton.render(
  <React.StrictMode>
   <ThemeSwitcher/>
  </React.StrictMode>
);*/

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
