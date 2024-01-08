import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import {Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import '../style/navigation.css'

const Navigation = () => {
    return (
        <div className="menuList">
            <MenuList className='navbar-List' style={{display: "inline-flex"}}>
                <MenuItem>
                    <Link to='/' className='menuLink'><HomeIcon className='menuIcon'/><span>Home</span></Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/chat' className='menuLink'><ChatIcon className='menuIcon'/><span>Chat</span></Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/profile' className='menuLink'><AccountCircleIcon className='menuIcon'/><span>Profile</span></Link>
                </MenuItem>
                <MenuItem>
                    <Link to='/contact' className='menuLink'><PeopleIcon className='menuIcon'/><span>Contact</span></Link>
                </MenuItem>
            </MenuList>
        </div>
    );
}

export default Navigation;