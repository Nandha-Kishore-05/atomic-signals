import React from 'react';
import Sidebar from '../../components/layout/sidebar';
import TeamMembers from '../teammembers/teammember';
import TeamNavbar from '../teammembers/TeamNavbar';
import CustomTable from '../teammembers/teammember';


function Atomic() {
    return (
        <div style={{ display: 'flex', width: '100%' }}>
         
            <Sidebar />

      
            <div style={{ flexGrow: 1, padding: '20px',backgroundColor:'#F0F0F0' }}>
            <TeamNavbar />
                <CustomTable />
            </div>
        </div>
    );
}

export default Atomic;
