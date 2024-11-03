import React from 'react';
import { Box, Paper, InputBase, IconButton, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import './TeamNavbar.css'; 
import Filter from '../../components/icon/filter';
import Import from '../../components/icon/import';
import CheckBox from '../../components/icon/textbox';

const TeamNavbar = () => {
    return (
        <Box className="navbar-container">
            <div className="navbar-title">
                Team members
            </div>

            <div className="navbar-options">
                <Box className="filter-options">
               < CheckBox />
                    <Box className="text-checkbox">Show only my reportees</Box>
                </Box>

                <Paper component="form" className="search-bar" style={{ width: '400px',border:'1px solid #CACACA' }}>
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon style={{backgroundColor :'#888888 0% 0% no-repeat padding-box'}} />
                    </IconButton>
                    <InputBase
                        className="search-input"
                        placeholder="Search by name, email"
                        inputProps={{ 'aria-label': 'search by name or email' }}
                        style={{ width: '300px' }}
                    />
                </Paper>

                <div className="filter-icon">
                    <Filter  />
                </div>
<div className='vertical-line'></div>
                <Button variant="contained" startIcon={<Import />} className="import-btn">
                    Import
                </Button>

                <Button variant="contained"  className="add-member-btn">
                    Add member
                </Button>
            </div>
        </Box>
    );
};

export default TeamNavbar;
