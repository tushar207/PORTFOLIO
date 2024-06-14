import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Service from "./Pages/Service";
import Home from "./Pages/Home";

function App() {
  return (
   <>
  {/* <Header/> */}
  {/* <About/> */}
  {/* <Projects/> */}
  {/* <Service/> */}
  {/* <Contact/> */}
  {/* <Footer/> */}


  <BrowserRouter>
  <Routes>
  <Route path="/" element={<><Home/></>}></Route>
    <Route path="/about" element={<><About/></>}></Route>
    <Route path="/service" element={<><Service/></>}></Route>
    <Route path="/projects" element={<><Projects/></>}></Route>
    <Route path="/contact" element={<><Contact/></>}></Route>

  </Routes>
  </BrowserRouter>
   </>
  );
}

export default App;
