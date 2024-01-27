import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
        <div>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
            <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
            <button type="submit">Login</button>
        </div>
    </form>
</div>

    // <div>
    //   <h2>Login</h2>
    //   <form>
        
    //     <div>
    //       <label>Password:</label>
    //       <input
    //         type="password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <button type="button" onClick={handleLogin}>Login</button>
    //   </form>
    // </div>
  );
};

export default Login;