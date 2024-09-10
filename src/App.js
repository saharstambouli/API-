import './App.css';
import UserList from './UserList';
import {useState} from 'react';

function App() {
const [show,setShow]=useState(false);
const handleClick=()=>{
  setShow(!show);
}

  return (
    <div className="App">
      <header className="App-header">
       <button onClick={handleClick}>{show ? "Hide Users" : "Add Users"} </button>
       {show && <UserList />}
      

      </header>
    </div>
  );
}

export default App;
