import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/Navbar";
import Project from "./components/Project";
import Curriculo from "./components/Curriculo";
import Habilidades from "./components/Habilidades";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Project />
      <Curriculo />
      <Habilidades />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
