import React, { useState } from 'react';

import './welcome.css';

import SvgComponent from '../../components/icon/atomic';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform any necessary validation or login logic here
    
        // On successful login, navigate to the /atomic page
        navigate('/atomic');
      };
    
  return (
    <div className="welcome-container">
      <div className="welcome-card">
<div style={{display:'flex',justifyContent:'flex-start'}}>
          <SvgComponent />
  
          </div>
        <div  className="signuptitle">Welcome!</div>

        <div className="signupheading">
        One positive feedback per day or week can
        </div>
        <div className="signupsubheading">
        make us grow exponentially

        </div>

        <div style={{fontSize:'14px',display:'flex',justifyContent:'flex-start'}}> 
        Email 
        </div>
        <TextField
        variant="outlined"

        placeholder="Work Email"
        fullWidth
        value="atomicsignals@gmail.com"
        className="email"
        sx={{
          height: '40px',
          marginTop: '10px',
          marginBottom: '20px',
         
          '& .MuiOutlinedInput-root': {
            color: '#484661',
            fontWeight: 500,
            padding:'none',
            height:'40px',
            border: '0px solid #EBEBEB',
          },
        }}
      />
 <div style={{fontSize:'14px',display:'flex',justifyContent:'flex-start'}}> 
        Work Email 
        </div>

      <TextField
        variant="outlined"
   
        placeholder="Enter Password"
        fullWidth
        type={showPassword ? 'text' : 'password'}
        className="password"
        sx={{
          height: '40px',
          marginTop: '10px',
          marginBottom: '20px',
          '& .MuiOutlinedInput-root': {
            color: '#484661',
            fontWeight: 500,
            padding:'none',
            height:'40px',
            border: '0px solid #EBEBEB',
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <a href="/Welcome" className="welcome-login-link">Forgot Password?</a>
      <div style={{marginTop:'25px'}}>
        <Button variant="contained" sx={{backgroundColor:'#49C792',textTransform:'none', marginLeft:'2px'}}  className="submit" fullWidth  onClick={handleLogin} >
          Log in
        </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
