import './App.css';
import PrincipalMenu from './Components/principalMenu';
import Home from './Components/home';
import RecordTime from './Components/recordTime';
import SearchTask from './Components/searchTask';
import CreateTask from './Components/createTask';
import SearchRecordTime from './Components/searchRecordTime';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <PrincipalMenu />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/timerecord_view" element={<RecordTime/>} />
        <Route path="/searchrecordtime_view" element={<SearchRecordTime/>} />
        <Route path="/createtask_view" element={<CreateTask/>} />
        <Route path="/searchtask_view" element={<SearchTask/>} />
      </Routes>
    </BrowserRouter>   
  </div>
  );
}

export default App;
