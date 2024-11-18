import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';

 
// console.log(React,ReactDOM);

const result = ReactDOM.createRoot(document.getElementById('root'));

// result.render("What is your Age?");
// var userName = "Shrikant";
// var age = 22;

result.render(
    <App />
)