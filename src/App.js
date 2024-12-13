
import About from './aboutme/About';
import './App.css';
import Header from './header/Header';
import Project from './project/Project';
import Skill from './skill/Skill';
import Subabout from './subabout/Subabout';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <About />
      </div>
      <div className='contents'>
        <Header />
        <Subabout />
        <Skill />
        <Project />
      </div>
    </div>
  );
}

export default App;
