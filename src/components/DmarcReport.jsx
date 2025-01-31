import { useState, useEffect } from 'react';


import axios from './axios'


export default function DmarcReport() {
    const [dmarcReports, setDmarcReports] = useState()
   
    //  function handleChange() {
   
    //    setDmarcString
    //  }
   
     useEffect(() => {
       async function fetchData() {
       const req = await axios.get("/api/dmarcReports")
         // const records = req.data._embedded.dmarcRecords
         setDmarcReports(req.data._embedded.dmarcRecords)
         console.log(req.data._embedded.dmarcRecords)
       }
       fetchData()
     }, [])
   
     return (
        <></>
     )
}


















