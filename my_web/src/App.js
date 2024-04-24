import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import EnPage from "./EnPage.jsx";
import About from "./component/About.jsx";
import Skill from "./component/Skill.jsx";
import Contact from "./component/Contact.jsx";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Portfolio' element={<EnPage />} />
        <Route path='/Portfolio/about' element={<About />} />
        <Route path='/Portfolio/skill' element={<Skill />} />
        <Route path="/Portfolio/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
