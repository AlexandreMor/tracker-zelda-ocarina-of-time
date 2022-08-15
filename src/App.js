import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./components/settings/Settings";
import Help from "./components/Help";
import Aside from "./components/Aside";
import MainDisplay from "./components/MainDisplay";
import useLogic from "./logic/useLogic";

function App() {
  useLogic();
  return (
    <Router>
      <div className="App" onContextMenu={(e)=> e.preventDefault()}>
        <header className="App-header">
          <Navbar />
        </header>
        <div className="main-elements">
          <Aside display="tracker" />
          <main className="main">
            <Routes>
              <Route path="/" element={<MainDisplay />} />
              <Route path="settings" element={<Settings />} />
              <Route path="help" element={<Help />} />
            </Routes>
          </main>
          <Aside display="hints inputs" />
        </div>
      </div>
    </Router>
  );
}

export default App;
