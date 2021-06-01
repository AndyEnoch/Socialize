import React from 'react';
import './SidebarIcons.css';

function SidebarIcons({ Icon, title, className }) {
    return (
        <div className='sidebarIcons'>
            
                {Icon && <Icon className={className}/> }
                <span className={className}>{title}</span>
        </div>
    )
}

export default SidebarIcons;
