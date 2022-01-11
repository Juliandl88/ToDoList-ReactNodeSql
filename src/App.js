import logo from './logo.svg';
import './App.css';
import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
     <TaskList />
     <div>
      <h1>Hola React con Back</h1>
      <h2>Hola Back</h2>
      <h3>Hola Front Back</h3>
    </div>
    </div>
    
  );
}

export default App;
