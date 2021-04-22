import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import Navbar from './components/Navbar';
//pages
import Homepage from './components/pages/Homepage';
import Aboutpage from './components/pages/Aboutpage';
import Singlepage from './components/pages/Singlepage';
import Footer from './components/pages/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className='main_container'>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={Aboutpage} />
          <Route path='/singleshow/:id' component={Singlepage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
