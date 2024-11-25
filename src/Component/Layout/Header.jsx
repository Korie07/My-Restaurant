import React, {useState}from 'react'
import { AppBar, Box, Divider, Drawer, IconButton,Toolbar, Typography } from "@mui/material"
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {NavLink} from "react-router-dom";
import "../../styles/HeaderStyle.css";
const Header = () => {
  const [MobileOpen, setMobileOPen] = useState(false)
  //handle menu click
  const handledrawerToggle =() => {
    setMobileOPen(!MobileOpen)
  }
  //menu drawer 
  const drawer =(
    <Box onClick={handledrawerToggle}  sx={{textAlign:"center"}}>
      
    <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}}>
      <FastfoodIcon />
      MY Restaurant
      </Typography>
      
<ul className='mobile-navigation '>
  <li> 
    <NavLink activeCLassName="active" to={'/'}>Home</NavLink>
  </li>
  <li>
    <NavLink to={'/menu'}>Menu</NavLink>
  </li>
  <li>
    <NavLink to={'/about'}>About</NavLink>
  </li>
  <li>
    <NavLink to={'/contact'}>Contact</NavLink>
  </li>
</ul>
       </Box>  

  )
  return (
    <>
  
<Box>
  <AppBar component={'nav'} sx={{bgcolor:'black'}}>
    <Toolbar>
      <IconButton color='inherit' aria-label='open drawer' edge='start'  sx={{
        mr:2, 
        display:{sm:"none"},
      }}
      onClick={handledrawerToggle}>
    <MenuIcon />
      </IconButton>
   <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}}>
      <FastfoodIcon />
      MY Restaurant
      </Typography>
      <Box sx={{display:{xs:'none',sm:'block'}}}>
<ul className='navigation-menu '>
  <li> 
    <NavLink  activeCLassName="active"to={'/'}>Home</NavLink>
  </li>
  <li>
    <NavLink to={'/menu'}>Menu</NavLink>
  </li>
  <li>
    <NavLink to={'/about'}>About</NavLink>
  </li>
  <li>
    <NavLink to={'/contact'}>Contact</NavLink>
  </li>
</ul>
       </Box>
    </Toolbar>
  </AppBar>
  <Box component={'nav'}>
    <Drawer variant='temporary' open={MobileOpen}
    onClose={handledrawerToggle}
    sx={{display:{xs:"block",sm: "none"}, "& .muiDrawer-paper":{
      boxSizing:"border-box",
      width:"240px"
    }}}
    >
      {drawer}
      </Drawer>

  </Box>
<Box>
<Toolbar />
</Box>
</Box>
    </>
  )
}

export default Header
