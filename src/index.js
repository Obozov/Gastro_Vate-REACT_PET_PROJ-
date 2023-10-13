import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// imitation backend
let restaurantsData = [
	{ id: 1, name: "Clode Mone", status: false, time: 10, foto: "url" },
	{ id: 2, name: "Gendelyk", status: true, time: 0, foto: "url" },
	{ id: 3, name: "PatoPizza", status: false, time: 30, foto: "url" },
	{ id: 4, name: "FriluaRes", status: false, time: 50, foto: "url" },
	{ id: 5, name: "Salva do Rali", status: true, time: 0, foto: "url" },

]



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App restaurantsData={restaurantsData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
