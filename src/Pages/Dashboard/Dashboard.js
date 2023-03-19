import React from 'react';
import Addclients from '../Add Clients/Addclients';


const Dashboard = () => {
    return (
        <div>
            <DashboardContainer>
                 <ViewClients />
                 <Addclients/>
            </DashboardContainer>
        </div>
    );
}

export default Dashboard;

