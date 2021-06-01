import React from 'react';
import './Navbar.css';
import {Menu, NotificationsNone, PostAdd, Search} from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <div className="navbar__menu">
                    <div className="nav__menu">
                        <Menu/>
                       
                    </div>
                    <strong>Doggito</strong>
                </div>
                <div className="navbar__center">
                    <Search />
                    <input placeholder='Search' type='search'/>
                </div>
                <div className='navbar__right'>
                    <div className="navbar__icons">
                        <div className='icon'>
                            <PostAdd/>
                        </div>
                        <div className='icon'>
                            <NotificationsNone/>
                        </div>
                    </div>
                    <div className='navbar__user'>
                        <Avatar src='https://avatarfiles.alphacoders.com/238/238252.jpg'/>
                        <div className='navbar__userName'>
                            <small>Username</small>
                            {/* <small>View Profile</small> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
