import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
//pages
import Homepage from './components/pages/Homepage';
import Aboutpage from './components/pages/Aboutpage';
import Singlepage from './components/pages/Singlepage';

const App = () => {
  return (
    <Router>
      <Navbar />

      <div className='container'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={Aboutpage} />
          <Route path='/singleshow/:id' component={Singlepage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
