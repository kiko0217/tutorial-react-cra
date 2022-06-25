import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from './About';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App
