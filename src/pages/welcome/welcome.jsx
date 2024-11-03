import React, { useState } from 'react';
import './welcome.css';
import SvgComponent from '../../components/icon/atomic';
import { TextField, IconButton, InputAdornment, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const Welcome = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');

    const handleTogglePassword = () => setShowPassword(!showPassword);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
          
            const response = await axios.post('http://localhost:3000/api/login', { email, password });
            
         
            if (response.status === 200) {
                navigate('/atomic');
            }
        } catch (error) {
          
            setError('Invalid email or password');
        }
    };

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                    <SvgComponent />
                </div>
                <div className="signuptitle">Welcome!</div>

                <div className="signupheading">
                    One positive feedback per day or week can
                </div>
                <div className="signupsubheading">
                    make us grow exponentially
                </div>

                <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'flex-start' }}>
                    Email
                </div>
                <TextField
                    variant="outlined"
                    placeholder="Work Email"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    className="email"
                    sx={{
                        height: '40px',
                        marginTop: '10px',
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            color: '#484661',
                            fontWeight: 500,
                            height: '40px',
                            border: '0px solid #EBEBEB',
                        },
                    }}
                />

                <div style={{ fontSize: '14px', display: 'flex', justifyContent: 'flex-start' }}>
                    Password
                </div>

                <TextField
                    variant="outlined"
                    placeholder="Enter Password"
                    fullWidth
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password"
                    sx={{
                        height: '40px',
                        marginTop: '10px',
                        marginBottom: '20px',
                        '& .MuiOutlinedInput-root': {
                            color: '#484661',
                            fontWeight: 500,
                            height: '40px',
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

                {error && <div className="error-message">{error}</div>} 

                <a href="/forgot-password" className="welcome-login-link">Forgot Password?</a>
                <div style={{ marginTop: '25px' }}>
                    <Button
                        variant="contained"
                        sx={{ backgroundColor: '#49C792', textTransform: 'none', marginLeft: '2px' }}
                        className="submit"
                        fullWidth
                        onClick={handleLogin}
                    >
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
