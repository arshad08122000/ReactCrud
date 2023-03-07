import logo from './logo.svg';
import {useState} from 'react';
import AddUser from './components/Adduser'
import EditUser from './components/EditUser'
import Users from './components/Users'
import Navbaar from  './components/navbaar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";




function App() {
  return(
    <>    
    <Router>
        <Navbaar />
      <Routes>
        <Route path='/' element={<Users />}/> 
        <Route path='/Add' element={<AddUser />} />
        <Route path='/edit/:id'  element={<EditUser />}/>
      </Routes>
    </Router>
</>
  );
}

export default App;
