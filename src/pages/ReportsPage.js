import { LoginStatus } from "../utils/Auth"

function ReportsPage() {

  let reportsPageJSX
  let isLoggedIn = LoginStatus()

  if (isLoggedIn !== true) {
    reportsPageJSX = isLoggedIn
  } else {
    // edit the webpage from here
    reportsPageJSX = <h1>we are at the reports page!</h1>
  }

  return (
    <>
      {reportsPageJSX}
    </>
  )

  }
  
export default ReportsPage;