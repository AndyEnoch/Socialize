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
                    <input placeholder='Search' type='text'/>
                    <Search />
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
                        <Avatar />
                        <h4>Username</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
