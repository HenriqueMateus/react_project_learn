import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css";
import FixHeader from "./components/boxHeader/boxHeader";
import BoxLogin from "./components/boxLogin/boxLogin"
import Routes from './Routes'

function App() {
  return (
    <div>
      <FixHeader/>
      <Routes/>
    </div>
      
  );
}

export default App;
