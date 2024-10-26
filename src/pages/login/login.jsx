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
        <Typography variant="h6" className="signup-title">
          <SvgComponent/>
        </Typography>

        <div  className="signuptitle">Sign up</div>
        <div className="signup-subheading">
        You’re just a few details away to set up a culture of
        <div className="signup-subheading-2">
        feedback and thriving environment
        </div>
        </div>
        
        <Button variant="outlined" className="signup-button google" fullWidth>
          <img src={google} alt="Google logo" className="signup-icon" />
          Sign up with Google
        </Button>

        <Button variant="contained" className="signup-button outlook" fullWidth>
          <img src={microsoft} alt="Outlook logo" className="signup-icon" />
          Sign up with Outlook
        </Button>

        <Divider className="or-divider">or</Divider>

        <TextField 
          variant="outlined" 
          placeholder="Work Email" 
          fullWidth 
          value="atomicsignals@gmail.com" 
          className="email-input" 
        />

        <Button variant="contained" color="success" className="signup-button signup-submit" fullWidth>
          Sign up
        </Button>

        <Typography className="already-account">
          Already have an account? <a href="/login" className="login-link">Log in</a>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
