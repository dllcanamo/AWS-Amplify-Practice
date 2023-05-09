import { getDataFromDynamo } from "../utils/reportsService";

function ReportsPage() {

  data = getDataFromDynamo()
  // edit the webpage from here

  return (
    <h1>we are at the reports page!</h1>
  )

  }
  
export default ReportsPage;