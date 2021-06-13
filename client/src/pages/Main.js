import React, { useState } from 'react';
import './Main.css';
import { EmailSharp, LockSharp, PersonRounded } from '@material-ui/icons';

function Main() {

    const [signup, setSignup] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
    }

    const onClickSignUp = (e) => {
        e.preventDefault();
        setSignup(!signup)
    }


    
    return (
        <div className={`container  ${ signup ? 'signUp__mode' : 'container' } ` }>
            <div className='forms__container'>
                <div className='signIn-signUp'>
                    <form action='' className='signIn__form'>
                        <h2 className='title'>Sign in</h2>
                        <div className='input__field'>
                            <PersonRounded/>
                            <input type='text' placeholder='Username' />
                        </div>
                        <div className='input__field'>
                            <LockSharp/>
                            <input type='password' placeholder='Password' />
                        </div>
                        <input type='submit' onClick={handleSubmit} value='Login' class='btn solid' />
                    </form>

                    <form action='' className='signUp__form'>
                        <h2 className='title'>Sign up</h2>
                        <div className='input__field'>
                            <PersonRounded/>
                            <input type='text' placeholder='Username' />
                        </div>
                        <div className='input__field'>
                            <EmailSharp/>
                            <input type='text' placeholder='Email' />
                        </div>
                        <div className='input__field'>
                            <LockSharp/>
                            <input type='password' placeholder='Password' />
                        </div>
                        <div className='input__field'>
                            <LockSharp/>
                            <input type='password' placeholder='Confirm Password' />
                        </div>
                        <input type='submit' onClick={handleSubmit} value='Sign up' class='btn solid' />
                    </form>
                </div>
            </div>

            <div className='panels__container'>
                <div className='panel left__panel'>
                    <div className='content'>
                        <h3>New here ?</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestias aut, repellat?
                        </p>
                        <button className='btn transparent' id='signUp__btn' onClick={ onClickSignUp }>Sign up</button>
                    </div>

                    <img src='image/woman.svg' className='image' alt=''/>
                </div>
                <div className='panel right__panel'>
                    <div className='content'>
                        <h3>Member already ?</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                            Molestias aut, repellat ?
                        </p>
                        <button className='btn transparent' id='signIn__btn'
                            onClick={ onClickSignUp }
                        >Sign in</button>
                    </div>

                    <img src='image/Cautious_dog.svg' className='image' alt=''/>
                </div>
            </div>
            
        </div>
    )
}

export default Main;
