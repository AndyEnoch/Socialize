import React from 'react';
import './Header.css';
import { Create, Image, Subscriptions } from '@material-ui/icons';
import InputOptions from './InputOptions';

function Header() {
    return (
        <div className='header'>
            <div className='header__inputContainer'>
                <div className='header__input'>
                    <Create />
                    <form>
                        <input type="text"/>
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className='header__inputOPtions'>
                    <InputOptions Icon={Image} title='Photo' color='#70B5F9'/>
                    <InputOptions Icon={Subscriptions} title='Video' color='#E7A33E'/>
                </div>
            </div>
        </div>
    )
}

export default Header;
