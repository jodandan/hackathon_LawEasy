import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layouts/Headerco.jsx";
import Main from "./pages/main/Main.jsx";
import LawyerIntroduction from "./pages/lawyer/LawyerPage.jsx";
import ListDetail from "./pages/listDetail/ListDetailPage.jsx";
import ListWrite from "./pages/list/ListWrite.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/lawyer-introduction" element={<LawyerIntroduction />} />
        <Route path="/listDetail" element={<ListDetail />} />
        <Route path="/listWrite" element={<ListWrite />} />
      </Routes>
    </Router>
  );
};

export default App;