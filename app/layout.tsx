
import { ReactNode } from "react";
import ThemeRegistry from "../lib/utils/theme/ThemeRegistry";
import Header from "../components/Static/Header";
import Footer from "../components/Static/Footer";
import { Metadata } from "next";

interface LayoutProps {
    children: ReactNode
}

/* 
This metadata is used through all pages that use this layout
- Use %s to define variables that can be inserted in subpages
*/
export const metadata: Metadata = {
    title: {
        default: 'NextJS Demo',
        template: '%s | NextJS Demo'
    }
}

export default function RootLayout({ children }: LayoutProps) {

    console.log("SSR log here"); //This log is only shown on the server

    /**
     * Anything here is rendered on the server and sent to the client
     */
    return (
        <html lang="en">
            <body>
                <ThemeRegistry options={{ key: 'mui-theme' }}>
                    <Header/>
                    <main>
                        { children }
                    </main>
                    <Footer/>
                </ThemeRegistry>
            </body>
        </html>
    )
}