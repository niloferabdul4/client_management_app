import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Clientslist from './Pages/Clients List/Clientslist';
import Addclients from './Pages/Add Clients/Addclients';
import { useContext } from 'react';
import { ClientContext } from './Context/AppContextProvider';



function App() {
const {user,token}=useContext(ClientContext)

  return (
    <>
    <div className="app"> 
   
   {!token?

    (<Login />)
    :
  
      ( <Home />  )            
       
    
    }
    
   
    </div>
    </>
  );
}

export default App;
