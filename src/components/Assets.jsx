import { useState, useEffect } from 'react';

import axios from './axios'



export default function Assets() {
    const [assets, setAssets] = useState(0)

    useEffect(() => {
        async function fetchData() {
        const req = await axios.get("/api/assets")

          setAssets(req.data._embedded.assets)
          console.log(req.data._embedded.assets)
        }
        fetchData()
    }, [])
  
    return (
        <>
            { assets[0].number }
        </>
    )
}