import * as React from "react";
import { Link } from "gatsby"; 
import Layout from "../components/layout";


const AboutPage = ()=>{

    return(

        <Layout pageTitle='About Page'>
            <p>Hi there! I'm the proud create of site, which I built in Gatsby</p>
        </Layout>
        // <main>
        //     <h1>Hola desde About</h1>
        //     <p>Hi there! I'm the proud create of site, which I built in Gatsby</p>
        //     <Link to="/" >Back to home</Link>
        // </main>
    );
};

export const Head = ()=> <title>About Me</title>

export default AboutPage;