import React from 'react';
import './Sidebar.css';
// import SidebarIcons from './SidebarIcons';
import { BookmarksOutlined, ExploreOutlined, HomeOutlined, SubscriptionsOutlined } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <Avatar className='sidebar__avatar'/>
                <h5>Andy Aladi</h5>
                <small>andykwesi17@gmail.com</small>
            </div>
            <div className='sidebar__Icons'>
                <ul>
                    <li>
                        <Link className='active'>
                            <HomeOutlined/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <BookmarksOutlined/>
                            <span>Bookmarks</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <ExploreOutlined/>
                            <span>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <SubscriptionsOutlined/>
                            <span>Subscriptions</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <HomeOutlined/>
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <BookmarksOutlined/>
                            <span>Bookmarks</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <ExploreOutlined/>
                            <span>Explore</span>
                        </Link>
                    </li>
                    <li>
                        <Link>
                            <SubscriptionsOutlined/>
                            <span>Subscriptions</span>
                        </Link>
                    </li>
                </ul>
                
            </div>
        </div>
    )
}

export default Sidebar;
