/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import { TaskProvider } from "./context";
import "./assets/css/icon.css";
import "./assets/css/public.css";

function App() {
  return (
    <div className="App">
      <TaskProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </TaskProvider>
    </div>
  );
}

export default App;
