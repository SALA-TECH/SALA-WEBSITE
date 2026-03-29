import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import "./App.css";

// TODO: create these pages when ready
import About from "./pages/About";
import Projects from "./pages/Projects";
import Media from "./pages/Media";
import Library from "./pages/Library";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/media" element={<Media />} />
          <Route path="/library" element={<Library />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;