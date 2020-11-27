import React from 'react'
import '../home.css'

function HomeScreen() {
    return (
        <div className='landing'>
            <nav>
                <h1 id='nav-logo'>IF-Tracker</h1>
                <ul className='nav-links'>
                    <li>
                        <button className='login-btn'>Login</button>
                    </li>
                </ul>
            </nav>
            <main>
                <h2 id='main-logo'>intermittent fasting easier</h2>
                <p className='main-text'>
                    Track your eating schedule - See your life change
                </p>
                <button className='signup-btn'>Sign Up Now</button>
            </main>
        </div>
    )
}

export default HomeScreen
