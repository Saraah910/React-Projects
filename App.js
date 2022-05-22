import logo from './logo.svg';
import './App.css';
import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title = "Welcome";
  const likes = 30;
  const link = "https://www.google.com";
  // cannot pass boolean or object as a dynamic data
  // Only strings, integers, arrays
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>
  );
}

export default App;
