import React from 'react';
import {Link} from "react-router-dom";


const Nav = ()=>{

    const logoStyle = {
        backgroundColor: "red",
        color : "white",
        padding : '4% 0%'
    };

    const navStyle = {
        display : "grid",
        gridTemplateColumns : "1fr 3fr",
        background : "white",
        borderBottom : "1.5px solid red"
    };

    const navListStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        listStyle : 'none'
    };

    return (
        <>
            <nav style = {navStyle}>

                <div style = {logoStyle}><center><h1 style = {{padding : "0.71% 0%", margin : "0% 0%"}}>RHEMARX</h1></center></div>

                <ul style = {navListStyle}>

                    <li>
                        <Link to = "/" > Home </Link>
                    </li>
                    <li>
                        <Link to = "/about"> About Us</Link>
                    </li>
                    <li>
                        <Link to = "/users" > Users </Link>
                    </li>
                    <li>
                        <Link to = "/admin"> Admin </Link>
                    </li>

                </ul>

            </nav>
            
        </>
    );
}

export default Nav;