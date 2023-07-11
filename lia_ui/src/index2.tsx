import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Feedback from './components/Feeadback';
import ThemeSwitcher from './components/ThemeSwitcher';

const newButton = ReactDOM.createRoot(
  document.getElementById('feedback') as HTMLElement
);
newButton.render(
  <React.StrictMode>
   <Feedback/>
  </React.StrictMode>
);

const switchThemeButton = ReactDOM.createRoot(
  document.getElementById('switchTheme') as HTMLElement
);
switchThemeButton.render(
  <React.StrictMode>
   <ThemeSwitcher/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
