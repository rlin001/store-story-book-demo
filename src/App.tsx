import React from 'react';
import logo from './logo.svg';
import './App.css';
import {LoginForm} from "./components/business/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginForm
          title='Login Form'
          submit={(e: any, formData: any)=>{
            console.log("submit, ", e, formData);
          }} reset={(e: any, formData: any)=>{
          console.log("reset, ", e, formData);
          }}
        />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
