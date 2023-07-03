import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./pages/post/Edit";

function App() {
  return (
    <BrowserRouter>
      <div>헤더 부분</div>
      <Routes>
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
