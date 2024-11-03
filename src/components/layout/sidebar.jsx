import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, Typography, Divider } from '@mui/material';
import { Person, Group, Feedback, Settings, Notifications, ExitToApp } from '@mui/icons-material';
import Atomics from '../icon/team';
import { useNavigate } from 'react-router-dom';

const topMenuItems = [
    { text: 'Profile', icon: <Person />, path: '/profile' },
    { text: 'Team', icon: <Group />, path: '/atomic' },
    { text: 'Feedback', icon: <Feedback />, path: '/feedback' },
];

const bottomMenuItems = [
    { icon: <Settings />, path: '/settings' },
    { icon: <Notifications />, path: '/notifications' },
    { icon: <ExitToApp />, path: '/' },
];

function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(null); 
    const navigate = useNavigate();

    const handleNavigation = (path, index) => {
        setActiveIndex(activeIndex);
        navigate(path); 
    };

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 100,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 90,
                    boxSizing: 'border-box',
                    backgroundColor: '#2A2D64',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: 2,
                },
            }}
        >
            <Box sx={{ width: '100%', textAlign: 'center' }}>
                <Atomics />
                <Typography variant="body2" align="center" sx={{ color: '#fff', fontWeight: 'bold', fontSize: '0.8rem', mb: 2 }}>
                    V 1.0.02
                </Typography>
                <Divider sx={{ borderColor: '#fff', width: '50%', mx: 'auto', mb: 2 }} />
                <List sx={{ width: '60%', marginLeft: '20px' }}>
                    {topMenuItems.map((item, index) => (
                        <React.Fragment key={item.text}>
                            <ListItem
                                button
                                onClick={() => handleNavigation(item.path, index)}
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: activeIndex === index ? '#1B1E45' : '#fff',
                                    backgroundColor: activeIndex === index ? '#4CAF50' : '#1B1E45',
                                    borderRadius: 2,
                                    marginBottom: 1,
                                    '&:hover': {
                                        backgroundColor: '#4CAF50',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ color: activeIndex === index ? '#fff' : '#fff', minWidth: 0 }}>
                                    {item.icon}
                                </ListItemIcon>
                            </ListItem>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    fontSize: '12px',
                                    fontWeight: activeIndex === index ? 'bold' : 'normal',
                                    color: '#fff',
                                    textAlign: 'center',
                                    marginBottom: '20px',
                                }}
                                sx={{ marginTop: 0.5 }} 
                            />
                        </React.Fragment>
                    ))}
                </List>
            </Box>

            <Box sx={{ width: '100%', paddingBottom: 2 }}>
                <List sx={{ width: '70%', padding: '8px', margin: '5px', marginLeft: '15px' }}>
                    {bottomMenuItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <ListItem
                                button
                                onClick={() => handleNavigation(item.path, index + topMenuItems.length)}
                                sx={{
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: activeIndex === index + topMenuItems.length ? '#4CAF50' : '#fff',
                                    backgroundColor: activeIndex === index + topMenuItems.length ? '#1B1E45' : '#1B1E45',
                                    borderRadius: 2,
                                    marginBottom: 1,
                                    '&:hover': {
                                        backgroundColor: '#1B1E45',
                                    },
                                }}
                            >
                                <ListItemIcon sx={{ color: activeIndex === index + topMenuItems.length ? '#4CAF50' : '#fff', minWidth: 0 }}>
                                    {item.icon}
                                </ListItemIcon>
                            </ListItem>
                            <ListItemText
                                primary={item.text}
                                primaryTypographyProps={{
                                    fontSize: '0.75rem',
                                    fontWeight: activeIndex === index + topMenuItems.length ? 'bold' : 'normal',
                                    color: '#fff',
                                    textAlign: 'center',
                                }}
                                sx={{ marginTop: 2 }} 
                            />
                        </React.Fragment>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
}

export default Sidebar;
