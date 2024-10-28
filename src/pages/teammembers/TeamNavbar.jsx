import React from 'react';
import { Box, Checkbox, Paper, InputBase, IconButton, Button, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import UploadIcon from '@mui/icons-material/Upload'; // For Import button icon
import AddIcon from '@mui/icons-material/Add'; // For Add Member button icon
import './TeamNavbar.css'; // External CSS file

const TeamNavbar = () => {
    return (
        <Box className="navbar-container">
            <Typography variant="h6" className="navbar-title">
                Team members
            </Typography>

            <Box className="navbar-options">
                <Box className="filter-options">
                    <Checkbox defaultChecked color="success" />
                    <Typography>Show only my reportees</Typography>
                </Box>

                <Paper component="form" className="search-bar">
                    <IconButton type="submit" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        className="search-input"
                        placeholder="Search by name, email"
                        inputProps={{ 'aria-label': 'search by name or email' }}
                    />
                </Paper>

                <IconButton className="filter-icon">
                    <FilterListIcon />
                </IconButton>

                <Button variant="outlined" startIcon={<UploadIcon />} className="import-btn">
                    Import
                </Button>

                <Button variant="contained" startIcon={<AddIcon />} className="add-member-btn">
                    Add member
                </Button>
            </Box>
        </Box>
    );
};

export default TeamNavbar;
