import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css";
import FixHeader from "./components/boxHeader/boxHeader";
import AppRouter from "./test"
function App() {
  return (
    <div>
      <FixHeader />
      <AppRouter />
    </div>
      
  );
}

export default App;
