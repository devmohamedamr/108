import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Add from './Add';
import {Outlet,Link} from 'react-router-dom'
function App() {
  return (
    <>
      <h1>hi app</h1>
      <nav>
          <Link to='about'>about</Link>
          <Link to='contact'>contact</Link>
      </nav>
    
      <Outlet />
    </>
  );
}

export default App;
