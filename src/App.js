
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import {Professional} from "./components/Professional";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import {Experience} from "./components/Experience";
import { Research } from "./components/Research";

function App() {
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Research />
      <Professional />
      <Experience />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
