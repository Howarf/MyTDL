import { useEffect, useState } from 'react';
import './App.css';
import SignIn from './component/Signin';
import Main from './component/main';

function App() {
  let [darkmode,setDarkmode] = useState(false);
  let [isLogin,setIsLogin] = useState(false);
  function DarkMode(){
    setDarkmode(true);
    alert('다크모드'+darkmode);
  }
  useEffect(() => {
    if(sessionStorage.getItem('user_ID')){
      setIsLogin(true);
    }
  },[])
  return (
    <div className="App">
      <button className="DarkMode" onClick={DarkMode}>다크모드</button>
      {isLogin ? <Main isLogin = {isLogin}/> : <SignIn/>}
    </div>
  );
}

export default App;