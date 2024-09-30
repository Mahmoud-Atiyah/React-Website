import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Test from './test/test';
//import About from './About';
//import Services from './Services';
//import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Home" exact element={<Home />} />
          <Route path="/Test" exact element={<Test />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
