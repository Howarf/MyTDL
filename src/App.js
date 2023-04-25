import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/Signin';
import Main from './component/main';
import ToDoList from './component/ToDoList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/main' element={<Main/>}/>
          <Route path='/ToDoList' element={<ToDoList/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;