import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom' 

export default function Header() {
  return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{backgroundColor:"Black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'}><Button sx={{color:"White"}} color="inherit"> AI RESUME Builder</Button></Link>
           
          </Typography>
          <Link to={'/saved'}><Button sx={{color:"White"}} color="inherit">ALL RESUMES</Button></Link>
          <Link to={'/downloads'}><Button sx={{color:"White"}} color="inherit">ALL DOWNLOADS</Button></Link>
          <Link ><Button sx={{color:"White"}} color="inherit">ABOUT US</Button></Link>
         
        </Toolbar>
      </AppBar>
    </Box>
  )
}
