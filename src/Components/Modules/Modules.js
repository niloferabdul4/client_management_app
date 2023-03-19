import React,{useEffect, useState} from 'react'
import { SubTitle } from '../Sidebar/sidebarstyles'
import { ModulesContainer,Module, SubText } from './modulesstyles'
import ModuleSidebar from './ModuleSidebar'
import ModuleMainbar from './ModuleMainbar'

const Modules = () => {
  const [modules, setModules] = useState([
    { id: 1, label: "Home/Dashboard", isChecked: false },
    { id: 2, label: "Helpdesks", isChecked: false },
    { id: 3, label: "Assets", isChecked: false },
    { id: 4, label: "Daily Tasks", isChecked: true },
    { id: 5, label: "PPM", isChecked: false },
    { id: 6, label: "Employees", isChecked: false },
    { id: 7, label: "Profile", isChecked: false },
    { id: 8, label: "Transactions", isChecked: false }
  ]);
  const [selectedModule,setSelectedModule]=useState()
  useEffect(()=>{setSelectedModule(modules[3].label)},[])

  return (
    <div>
        <ModulesContainer>
            <SubTitle>Modules SetUp</SubTitle>
            <SubText>Select the modules that the client can use..</SubText>
            <Module>
                <ModuleSidebar modules={modules} setModules={setModules} setSelectedModule={setSelectedModule} />
                <ModuleMainbar modules={modules} setModules={setModules} selectedModule={selectedModule} />
            </Module>           
        </ModulesContainer>
      
    </div>
  )
}

export default Modules
