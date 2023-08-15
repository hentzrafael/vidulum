import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import {Outlet, Link} from 'react-router-dom';

const linkStyle = {
    textDecoration:'none',
}


export default function BasePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit"><Link to={'/'} style={linkStyle}>Vidulum</Link></Button>
          </Typography>
          <Button color="inherit"><SearchIcon /></Button>
          <Button color="inherit"><Link to={'/login'} style={linkStyle}>Login</Link></Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}