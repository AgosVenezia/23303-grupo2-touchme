import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import Header from './components/Header';
import './App.css';

const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (firebaseUser) => {
    if(firebaseUser) {
      setUser(firebaseUser);
      localStorage.setItem('userInfo', firebaseUser.uid)
    } else {
      setUser(null);
      localStorage.removeItem('userInfo')
    }
  })

  return (
    <div className='App'>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
      </UserContext.Provider>
    </div>
  );
}

export { UserContext }
export default App;
