import React,{createContext, useState,useEffect} from 'react'
export const ClientContext=createContext(null)

const AppContextProvider = ({children}) => {

  const [selected,setSelected]=useState(false)
  const [selectedModule,setSelectedModule]=useState('')
  const[selectedBtn,setSelectedBtn]=useState('View Clients')
  const [user,setUser]=useState('')
  const[token,setToken]=useState('')
  
  return (
    <div>
      <ClientContext.Provider value={{user,setUser,
                                      token,setToken,
                                      selectedBtn,
                                      setSelectedBtn,
                                      selected,
                                      setSelected,
                                      selectedModule,
                                      setSelectedModule}} >
          {children}
      </ClientContext.Provider>
    </div>
  )
}

export default AppContextProvider
