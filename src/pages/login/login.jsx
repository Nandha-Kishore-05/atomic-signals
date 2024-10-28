import React from 'react';
import { Button, TextField, Typography, Divider } from '@mui/material';
import './login.css';
import google from '../../assets/google-logo.svg';
import microsoft from '../../assets/outlook-logo.svg';
import atmoic from '../../assets/atomic.svg';
import SvgComponent from '../../components/icon/atomic';

const Login = () => {
  return (
    <div className="signup-container">
      <div className="signup-card">
<div style={{display:'flex',justifyContent:'flex-start'}}>
          <SvgComponent />
  
          </div>
        <div  className="signuptitle">Sign up</div>

        <div className="signupheading">
        You’re just a few details away to set up a culture of
        </div>
        <div className="signupsubheading">
        feedback and thriving environment

        </div>
        <Button variant="outlined" className="signup-button google" fullWidth>
  <img src={google} alt="Google logo" className="signupicon" />
  <div style={{ marginLeft: '75px' }}>Sign up with Google</div>
</Button>


        <Button variant="outlined" className="signup-button outlook" fullWidth>
          <img src={microsoft} alt="Outlook logo" className="signup-icon" />
          <div style={{marginLeft:'75px'}}>   Sign up with Outlook </div>
        </Button>
<div style={{marginLeft:'40px',marginRight:'40px',marginBottom:'20px'
}}>
        <Divider className="or">or</Divider>
        </div>
        <div style={{fontSize:'12px',display:'flex',justifyContent:'flex-start'}}> 
        Work Email <div style={{color:'red',marginLeft:'5px'}}> * </div>
        </div>
        <TextField
  variant="outlined"
  placeholder="Work Email"
  fullWidth
  value="atomicsignals@gmail.com"
  className="email"

  InputProps={{
    sx: {
      height: '40px', 
      padding: '5px',

      marginTop:'10px',
      marginLeft:'2px',
      color: '#484661',
      fontWeight:'6500'
    },
  }}
/>

<div style={{marginTop:'15px'}}>
        <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none',     marginLeft:'2px'}}  className="submit" fullWidth>
          Sign up
        </Button>
        </div>
        <div style={{marginTop:'30px'}}>
        <div className="already-account">
          Already have an account? <a href="/Welcome" className="login-link">Log in</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
