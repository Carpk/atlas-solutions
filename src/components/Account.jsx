import { useState, useEffect } from 'react';

import axios from './axios'

export default function Account() {
    const [account, setAccount] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/api/accounts")
            // const final acct = req.data._embedded.accounts[]
            setAccount(req.data._embedded.accounts)
            console.log(req.data._embedded.accounts)
        }
        fetchData()
     }, [])
  
    return (
        <>
            { account[0].name }
        </>
    )
}