
import './App.css';
import Navbar from './components/Navi';
import Home from './components/Home';
import Add from './components/Add';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
         <Route path="/" exact element={<Home/>}/>  
        <Route path="/Add" exact element={<Add/>}/>   
      </Routes>
      </Router>
       
       
    </div>
  );
}

export default App;
