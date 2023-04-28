import React from 'react';
import './LoginPage.css';


const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="login-page">
      <div className="logo-section">
        <img src={require('../Assets/LogoHalf.png')}alt="Logo" />
        <h1>DeepRead.com</h1>
        <h2>Leverage your reading</h2>
      </div>
      <div className="login-form-section">
        <div className="login-form">
        <div className="container">
          <h2 >Sign in</h2>
          <p className="new-account-instead">
             <a href='/createDeepReadAccount'>Create DeepRead Account</a> Instead
        </p>
        </div>
          <form onSubmit={handleLogin}>
            <label>Email or Username</label>
            <input type="text" placeholder="Enter your email or username" required />
            <div>
            <label>Password</label>
           
            <div className="password-input">
              <input type="password" placeholder="Enter your password" required />
            </div>
                  

            <div className="stay-signed-in">
            <input type="checkbox" id="stay-signed-in" />
            <label htmlFor="stay-signed-in">Stay signed in</label>
            <p className="forgot-password">
            <a href="/ForgotPassword">Forgot your Password ? </a></p>
            </div>
            </div>

            <button type="submit">Sign In</button>
            <p className="small-text">
            By continuing, you agree to DeepRead’s <a href="/terms">Conditions of Use</a> and <a href="/privacy">Privacy Notice</a>.
        </p>

          </form>
          <div style={{ marginTop: '80px' }}>
          <button className="create-account-button">
          <strong>Go to Demo App</strong> (no Sign in required)
          </button>

          
          <p className='small-or'>
            -------------------------------------or--------------------------------------
         </p>

          <div className="third-party-login">
            <button className="google-login-button">Sign in with Google</button>
            <button className="amazon-login-button">Sign in with Amazon</button>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
