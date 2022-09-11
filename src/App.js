import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./components/settings/Settings";
import Aside from "./components/Aside";
import MainDisplay from "./components/MainDisplay";
import useLogic from "./logic/useLogic";

function App() {
  useLogic();
  const bodyEl = (el) => {
    el &&
      el.addEventListener("selectstart", (e) => {
        e.preventDefault();
      });
  };
  
  return (
    <Router>
      <div
        className="App"
        onContextMenu={(e) => e.preventDefault()}
        onMouseDown={() => {
          return false;
        }}
        ref={bodyEl}
      >
        <header className="App-header">
          <Navbar />
        </header>
        <div className="main-elements">
          <Aside display="tracker" />
          <main className="main">
            <Routes>
              <Route path="/" element={<MainDisplay />} />
              <Route path="settings" element={<Settings />} />
            </Routes>
          </main>
          <Aside display="hints inputs" />
        </div>
      </div>
    </Router>
  );
}

export default App;
