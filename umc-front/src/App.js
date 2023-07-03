import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Headerco.jsx';
import LawyerIntroduction from './pages/lawyer/LawyerPage.jsx';
import ListWrite from './pages/list/ListPage.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
      {/* <Route exact path="/" component={Home} /> */}
      <Route path="/lawyer-introduction" element={<LawyerIntroduction/>} />
      <Route path="/listWrite" element={<ListWrite/>} />
      </Routes>
      
      </Router>
  );
};

export default App;
