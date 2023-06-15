import { Routes, Route, useLocation } from "react-router-dom";
import Problem1 from "./components/Problem-1.jsx";
import Menu from "./components/Menu.jsx";
import Problem2 from "./components/Problem-2.jsx";
import Index from "./components/Index.jsx";
import Modal from "./ui/Modal.jsx";

function App() {
  // const location = useLocation();
  // const background = location.state && location.state.background;
  return (
    <>
      {/* <Routes location={background || location}> */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Menu />}>
          <Route path="problem-1" element={<Problem1 />} />
          <Route path="problem-2" element={<Problem2 />}>
            <Route path="modal/:name" element={<Modal />} />
          </Route>
        </Route>
      </Routes>
      {/* {background && (
        <Routes>
            <Route path="modal/:name" element={<Modal />} />      
        </Routes>
      )} */}
    </>
  );
}

export default App;
