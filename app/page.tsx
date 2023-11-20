import { Typography } from "@mui/material"
import { GET } from './api/testapi/route';

export default function HomePage() {
    return (
        <>
            <Typography variant="h1">Home Page</Typography>
            <Typography variant="body1">SRR page at /</Typography>
        </>
        
    )
}