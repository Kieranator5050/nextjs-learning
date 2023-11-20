'use client'; // This is a client page

import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function SecondPage() {
    const [counter, setCounter ] = useState(0);

    useEffect(() => {

        // Use the abort controller to cancel unnecessary requests
        // Can also use debouncing as an alternative method to wait before sending a request
        const controller = new AbortController(); 
        
        (async ()=>{
            const apiResponse = await fetch('api/testapi', {
                signal: controller.signal,
            });
            console.log(apiResponse);
        })();
        
        return () => controller.abort(); // Abort is called
    }, [])

    return (
        <>
            <Typography variant="h1">Second Page</Typography>
            <Typography>Client component at /secondpage</Typography>
            <Typography>{counter}</Typography>
            <Button onClick={()=>setCounter(counter+1)}>Click</Button>
        </>
        
    )
}