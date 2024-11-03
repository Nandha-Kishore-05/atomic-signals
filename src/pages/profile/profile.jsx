import React from "react";

import Sidebar from "../../components/layout/sidebar";
import man from "../../assets/woman.jpg"
import './profile.css'
import Delete from "../../components/icon/delete";
import Per from '../../components/icon/speedometer';
import Person from '@mui/icons-material/Person';
import BusinessCenter from '@mui/icons-material/BusinessCenter';
import LinkIcon from '@mui/icons-material/Link'
import RatingTable from "./rating";
import FeedbackCard from "./feedbackcard";
const UserProfile = () => {
  return (

         <div >
      <Sidebar />
 
      <div className="container">
<div>
<div className="profile" style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '10px', width: '100%', justifyContent: 'space-between' }}>
  {/* Left side with image and delete icon */}
  <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', marginRight: '20px' }}>
    <img src={man} alt="Profile" className="picture-woman"  />
    
    {/* Delete Icon */}
    <div  style={{ transform: 'scale(1.0)', width: '30px', height: '30px',backgroundColor:'white',borderRadius:'50%',border:'1px solid #EBEBEB',marginLeft:'60px',paddingTop:'2px', position: 'absolute', 
      bottom: '10',
      top:'90%' 
   
      }}>
      <center>     < Delete  /></center>
  

     </div>
  </div>

 
  <div style={{ flex: '1' }}>
    <div  className="text">Jennifer</div>
    <p style={{ margin: '5px 0', color: '#7A7A7A', display: 'flex', alignItems: 'center',marginBottom:'10px',marginTop:'10px' }}>
      <BusinessCenter style={{ marginRight: '5px', fontSize: '18px' }} /> Human Resources
    </p>
    <p style={{ margin: '5px 0', color: '#7A7A7A', display: 'flex', alignItems: 'center',marginBottom:'10px' }}>
      <Person style={{ marginRight: '5px', fontSize: '18px' }} /> Talent Manager
    </p>
    <p style={{ margin: '5px 0', color: '#7A7A7A', display: 'flex', alignItems: 'center' }}>
      <LinkIcon style={{ marginRight: '5px', fontSize: '18px' }} /> Samuel Guerrero
    </p>
  </div>


  <div style={{ backgroundColor: '#F3F3F3', padding: '5px', borderRadius: '5px', fontSize: '16px',fontWeight:'600', color:'#353448',width:'130px',paddingInlineStart:'20px',marginBottom:'110px' }}>
    3 yrs 6 Mon
  </div>
</div>
     <div className="performance">
<div className="performance-text">Performance</div><br />
<div className="performace-image"><Per   /></div>
<div className="overall">
  <div className="overall-text">Overall</div>
  <div className="need-text">Need to improve</div>
</div>
<div><RatingTable /></div>

</div>
</div>
<div>
<div className="feedback">
  <div className="feedback-text-container">
  <div className="feedback-text">My open feedbacks </div>
  <div className="feedback-number" >02</div>
  </div>
  <div className="card">
<FeedbackCard />
</div>
<div className="card">
<FeedbackCard />
</div>
</div>

</div>
     </div>
     </div>
 
  );
};

export default UserProfile;
