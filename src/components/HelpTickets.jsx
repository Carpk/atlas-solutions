import { useState, useEffect } from 'react';

import axios from './axios'




export default function HelpTickets() {
    const [helpTickets, setHelpTickets] = useState(0)

    useEffect(() => {
        async function fetchData() {
        const req = await axios.get("/api/helpTickets")

          setHelpTickets(req.data._embedded.helptickets)
          console.log(req.data._embedded.helptickets)
        }
        fetchData()
    }, [])
  
    return (
        <>
            { helpTickets[0].title }
        </>
    )
}