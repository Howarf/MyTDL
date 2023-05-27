import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './component/Signin';
import Main from './component/main';
import SignUp from './component/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<SignIn/>}/>
          <Route path='/SingUp' element={<SignUp/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;