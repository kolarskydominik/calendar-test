import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

const widgetName = 'calendar-app';
const widgetDiv = document.getElementById(widgetName);

ReactDOM.createRoot(widgetDiv!).render(
  <React.StrictMode>
    <App domElement={widgetDiv!} />
  </React.StrictMode>
);