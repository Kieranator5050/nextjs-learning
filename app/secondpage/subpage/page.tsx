import { Metadata } from "next"
import { Typography } from "@mui/material"

/* This meta data is only loaded for this page */
export const metadata: Metadata = {
    title: 'Subpage'
}

interface PageProps {
    searchParams: {
        page: string
    }
}

export default function Subpage(params: PageProps) {
    console.log(params);

    return (
        <>
            <Typography variant="h1">Subpage</Typography>
            <Typography variant="body1">SSR page at /secondpage/subpage</Typography>
            <Typography variant="body1">Page Number: {params.searchParams.page}</Typography>
        </>
        
    )
}