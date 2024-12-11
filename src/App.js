
import About from './aboutme/About';
import './App.css';
import Header from './header/Header';
import Skill from './skill/Skill';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <About />
      </div>
      <div className='contents'>
        <Header />
        <Skill />
      </div>
    </div>
  );
}

export default App;
