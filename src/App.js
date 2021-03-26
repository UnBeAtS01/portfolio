
import './App.scss';
import Data from './components/data/data';
import About from './components/about/about'

function App() {
  return (
    <div className="App">
      <div className='main'>
        <div className='side-bar'>
          <Data />
        </div>
        <div className='main-bar'>
          <About />
        </div>

      </div>

    </div>
  );
}

export default App;
