import {BrowserRouter, Routes, Route} from "react-router-dom";
//import NavBar from "./component/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import EnPage from "./EnPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Portfolio' element={<EnPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
