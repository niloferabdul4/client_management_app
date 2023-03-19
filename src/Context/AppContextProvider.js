import React,{createContext, useState} from 'react'
export const ClientContext=createContext()

const AppContextProvider = ({children}) => {

  const [selected,setSelected]=useState(false)
  const [selectedModule,setSelectedModule]=useState('')

  return (
    <div>
      <ClientContext.Provider value={{selected,setSelected,selectedModule,setSelectedModule,user,setUser}} >
          {children}
      </ClientContext.Provider>
    </div>
  )
}

export default AppContextProvider
