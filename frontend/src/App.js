import React from 'react';
import './singlePageTemplate.css';
// import { Box, Button, Heading, Grommet } from 'grommet';
import imgUrl from './Seattle.jpg'
import Home from './Home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={Home} />

      </Router>
    </div>
  )
}

export default App;
