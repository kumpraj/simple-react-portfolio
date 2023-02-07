
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Content/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
