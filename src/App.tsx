import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Site1 from "./pages/buttons";
import Site2 from "./pages/navbars";
import Site3 from "./pages/cards";
import Site4 from "./pages/typography";
import Site5 from "./pages/menu";

function App() {
  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/buttons" element={<Site1 />} />
        <Route path="/navbars" element={<Site2 />} />
        <Route path="/cards" element={<Site3 />} />
        <Route path="/typography" element={<Site4 />} />
        <Route path="/menu" element={<Site5 />} />
      </Routes>
    </>
  );
}

export default App;
