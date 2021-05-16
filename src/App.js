import React, {useState, useEffect} from 'react';
import HashLoader from "react-spinners/HashLoader";
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 2000)
  }, [])


  return (
    <div className="App">
      {
        loading ?
          <HashLoader 
          size={30}
          color={'#12ACE9'}
          loading={loading}
          />
        :
        <h1>Welcome to my Website!</h1>
      }
    </div>
  );
}

export default App;
