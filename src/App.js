import User from "./components/user/User"

import cwlogo from "./assets/cw.svg"
import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
    <div className="App">
      <img src={cwlogo} className="App-logo" alt="logo" />
      <User className="App-header" />
        

    </div>
  );
}

export default App;
