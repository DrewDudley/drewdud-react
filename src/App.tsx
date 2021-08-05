import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Portfolio from './Portfolio';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
