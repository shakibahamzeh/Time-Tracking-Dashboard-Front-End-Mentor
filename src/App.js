
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
        <Route path="/Daily" element={<Daily/>}/>
        <Route path='/Weekly' element={<Weekly/>}/>
        <Route path='/Monthly' element={<Monthly/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
