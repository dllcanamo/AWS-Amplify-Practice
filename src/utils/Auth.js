import { Navigate } from "react-router-dom";

function LoginStatus() {

    const LOGIN_URL = '/login'

    const isLoggedIn = sessionStorage.getItem('isLoggedIn')

    if (isLoggedIn === 'false' || isLoggedIn === null) { 
        return <Navigate to={LOGIN_URL} />
    } else {
        return true
    }
}

export { LoginStatus };

