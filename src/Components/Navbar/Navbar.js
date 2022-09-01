import React, {useContext} from 'react'
import {Link, useHistory} from 'react-router-dom';

import {Authcontext, FirebaseContext} from '../../store/Context';
import './Navbar.css'
function Navbar() {
    const {user} = useContext(Authcontext)
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)
    return (
        <div className='navbar'>
            <header>
                <h2 className='shop'>ShopCart</h2>
                <nav>
                    <ul className='nav__links'>
                        <li>{
                            user && <button onClick={
                                () => {
                                    firebase.auth().signOut();
                                    history.push('/login')
                                }
                            }>Logout</button>
                        }</li>
                       <Link to="/create"> <button>Sell</button></Link> 

                    </ul>
                </nav>
                <a className='cta' href='/'>
                <Link to="/Login"> <button>{ 
                        user ? `Welcome to ${
                            user.displayName
                        } ` : 'Login'
                    }</button></Link>
                </a>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Avatar" className="avatar"></img>
            </header>
        </div>
    )
}

export default Navbar
