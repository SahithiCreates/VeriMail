import { BrowserRouter, Routes, Route } from "react-router-dom";
import Predict from "./pages/Predict";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;