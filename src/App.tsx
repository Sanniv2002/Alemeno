import { RecoilRoot } from "recoil";
import Course from "./pages/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
