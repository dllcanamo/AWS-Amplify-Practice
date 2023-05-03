import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {

  const PASSWORD_ = 'password123'
  const LANDING_URL = '/'
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  if (sessionStorage.getItem('isLoggedIn') === 'true') {
    return <Navigate to={LANDING_URL} />
  }

  sessionStorage.setItem('isLoggedIn', 'false')

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    // Do something with the password
    if (password === PASSWORD_) {
      console.log('thou shall pass!')

      sessionStorage.setItem('isLoggedIn', 'true')

      setTimeout(() => {
        navigate(LANDING_URL)
      }, 2000)
    }
  }

    return (
      <>
        <h1>Aegis Ai</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
  
export default LoginPage;