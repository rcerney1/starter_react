import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Service1 from "./pages/Service1"
import Service2 from "./pages/Service2"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollTop"


function App() {

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/interior" element={<Service1 />} />
        <Route path="/services/exterior" element={<Service2 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
