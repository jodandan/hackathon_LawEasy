import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Headerco.jsx';
import Main from './pages/main/Main.jsx';
import LawyerIntroduction from './pages/lawyer/LawyerPage.jsx';
import MyProfile from './pages/mypage/MyProfile.jsx'
import ListDetail from './pages/listDetail/ListDetailPage.jsx';
import ListWrite from './pages/list/ListPage.jsx';
import FooterLaw from './components/layouts/Footer.jsx';


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>

      <Route exact path="/" element={<Main/>}  />
      <Route path="/lawyer-introduction" element={<LawyerIntroduction/>} />
      <Route path="/listDetail" element={<ListDetail/>} />
      <Route path="/listWrite" element={<ListWrite/>} />
      <Route path="/myPage" element={<MyProfile/>} />
      
      </Routes>
      <FooterLaw />
    </Router>
  );
};

export default App;