import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './pages/Login/Login';
import Registion from './pages/Registion/Registion';


function App() {
  return (
    <div className="App">
      <div className="container">
       <Routes>
          <Route path='/' element={<Registion/>}/>
          <Route path='/login' element={<Login/>}/>
       </Routes>
      </div>
    </div>
  );
}

export default App;
