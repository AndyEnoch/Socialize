import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import Register from './pages/Register';

function App() {
  return (
    <div className='app'>
      <Router>
        <Route exact path='/' component={Main} />
        <Route exact path= '/home' component={Home} />
        <Route exact path= 'login' component={Login} />
        <Route exact path= 'register' component={Register} />
      </Router>
    </div>
    
  );
}

export default App;