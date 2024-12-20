import React, { useState } from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // For sign-up

    const handleToggle = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here you would add your logic to handle the form submission
        // e.g., send a request to your backend API
        console.log('Email:', email);
        console.log('Password:', password);
        if (isSignUp) {
            console.log('Name:', name);
        }
    };

    return (
        <div className="ctn">
            <div className={`login ${isSignUp ? 'active' : ''}`} id="login">
                <div className={`form-container ${isSignUp ? 'sign-up' : 'sign-in'}`}>
                    <form onSubmit={handleSubmit}>
                        <h1>{isSignUp ? 'Create Account' : 'Sign In'}</h1>
                        <div className="social-icons">
                            {/* Make these links functional */}
                            <a href="#" className="icon"><i className="bi bi-google"></i></a>
                            <a href="#" className="icon"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="icon"><i className="bi bi-github"></i></a>
                            <a href="#" className="icon"><i className="bi bi-linkedin"></i></a>
                        </div>
                        <span>{isSignUp ? 'or use your email for registration' : 'or use your email and password'}</span>
                        {isSignUp && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </>
                        )}
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {isSignUp ? (
                            <button type="submit">Sign Up</button>
                        ) : (
                            <>
                                <a href="#">Forget Your Password?</a>
                                <button type="submit">Sign In</button>
                            </>
                        )}
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className={`toggle-panel ${isSignUp ? 'toggle-right' : 'toggle-left'}`}>
                            <h1>{isSignUp ? 'Welcome, Friend!' : 'Welcome Back!'}</h1>
                            <p>Enter your personal details to use all of site features</p>
                        </div>
                    </div>
                </div>

                {/* The button is now inside the form-container */}
                <div className="form-container">
                    <button type="button" id="login" onClick={handleToggle}>
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;