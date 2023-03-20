import React, { useContext } from 'react';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { ClientContext } from '../../Context/AppContextProvider';
import Addclients from '../Add Clients/Addclients';
import Clientslist from '../Clients List/Clientslist';
import {HomeContainer, Mainbar } from './homestyles';

const Home = () => {
    const {selectedBtn}=useContext(ClientContext)
    return (
        <HomeContainer id='home'>
              <Sidebar/>
              <Header/>
              <Mainbar>
                  {
                    selectedBtn==='View Clients'? 
                  
                  (<Clientslist />)
                  :
                   (<Addclients />)
                  }
              </Mainbar>              
        </HomeContainer>
    );
}

export default Home;
