import React from "react";
import { Link } from "gatsby";
import { container, heading, nav_links, nav_link_item, nav_link_text } from './layout.module.css'


const Layout = ({ children, pageTitle }) => {

    return (

        <div className={container}>
            <nav >
                <ul className={nav_links}>
                    <li className={nav_link_item} ><Link className={nav_link_text} to='/' >Home</Link></li>
                    <li className={nav_link_item}><Link className={nav_link_text} to='/about' >About</Link></li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}


export default Layout;