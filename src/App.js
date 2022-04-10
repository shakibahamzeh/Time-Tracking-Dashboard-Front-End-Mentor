
import './App.css';
import Daily from './components/Daily';
import Sidebar from './components/Sidebar';
import {Routes,Route} from "react-router-dom";
import Weekly from "./components/Weekly";
import Monthly from "./components/Monthly";

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Sidebar/>
      <Routes>
        <Route path="/" element={<Daily/>}/>
        <Route path="/daily" element={<Daily/>}/>
        <Route path='/weekly' element={<Weekly/>}/>
        <Route path='/monthly' element={<Monthly/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
