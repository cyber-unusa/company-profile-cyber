import{ Routes, Route } from 'react-router-dom'
import './App.css';
import { About } from './Component/About';
import Home from './Component/Home';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
