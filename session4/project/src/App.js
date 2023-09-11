import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom'
import Count from './components/Count';
import Number from './components/Number';
import CountContextProvider from './Context/CountContextProvider'
function App() {
  return (
      <>
        <Outlet />
      <CountContextProvider>
          <Count />
          <Number />
        </CountContextProvider>
      </>
  );
}

export default App;
