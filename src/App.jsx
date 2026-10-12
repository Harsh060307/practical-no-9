import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/home";
import About from "./pages/About";
import Students from "./pages/Student";
import StudentDetails from "./pages/StudentDetails";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
          path="/students/:id"
          element={<StudentDetails />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
