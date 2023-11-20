import { List, ListItem } from '@mui/material';
import Link from "next/link"; // Uses SSR initially then client side rendering

export default function Header() {
    const links = [
        {
            href: "/",
            label: "Home"
        },
        {
            href: "/secondpage",
            label: "SecondPage"
        },
        {
            href: "/secondpage/subpage",
            label: "Subpage"
        },
    ]

    return (
        <header>
            <List>
                { links.map((link, index) =>
                    <ListItem key={index}>
                        <Link href={link.href}>
                            {link.label}
                        </Link> 
                    </ListItem>
                )}
            </List>
        </header>
    )
}