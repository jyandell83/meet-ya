import React, { useState, useEffect} from 'react';
import './App.css';

const App = () => {

  const [message, setMessage] = useState('');

  async function fetchData() {
    const res = await fetch('http://localhost:8080/');
    const data = await res.json();
    setMessage(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(message)

  return (
    <div className="App">
      This is React
    </div>
  );
}

export default App;
