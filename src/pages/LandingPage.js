import { LoginStatus } from "../utils/Auth"

function LandingPage() {

  let landingPageJSX
  let isLoggedIn = LoginStatus()

  if (isLoggedIn !== true) {
    landingPageJSX = isLoggedIn
  } else {
    // edit the webpage from here
    landingPageJSX = <h1>we are at the landing page!</h1>
  }

  return (
    <>
      {landingPageJSX}
    </>
  )

  }
  
export default LandingPage;