import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/index";
import Table from "./pages/table";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
