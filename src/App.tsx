import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Site1 from "./pages/site1";
import Site2 from "./pages/site2";
import Site3 from "./pages/site3";

function App() {
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/site1" element={<Site1 />} />
        <Route path="/site2" element={<Site2 />} />
        <Route path="/site3" element={<Site3 />} />
      </Routes>
    </>
  );
}

export default App;
