import { getDataFromDynamo } from "../utils/reportsService";
import { useState, useEffect } from "react";

function ReportsPage() {
  const[data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDataFromDynamo();
        setData(res)
      } catch (err) {console.log(err)}
    }
    fetchData();
  },[]);
  
  // edit the webpage from here

  return (
    <h1>we are at the reports page!</h1>
  )

  }
  
export default ReportsPage;