import { LoginStatus } from "../utils/Auth"
import TopNavbar from "../components/TopNavbar"
import classes from "./landing-page.module.css"

function LandingPage() {

  let landingPageJSX
  let isLoggedIn = LoginStatus()

  if (isLoggedIn !== true) {
    landingPageJSX = isLoggedIn
  } else {
    // edit the webpage from here
    landingPageJSX = <>
      <TopNavbar></TopNavbar>
      <h1>we are at the landing page!</h1>
    </>
  }

  return (
    <>
      {landingPageJSX}
    </>
  )

  }
  
export default LandingPage;