import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { authenticate } from '../shared/redux/actions';

//const LegacyApp = React.lazy(() => import('./../legacy/App'));

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate())
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Production App
        </p>
      </header>
    </div>
  );
}

export default App;
