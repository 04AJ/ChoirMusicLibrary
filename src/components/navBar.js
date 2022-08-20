import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        St. Mary's Youth Choir
                    </Link>

                    <ul>
                        <li>
                            <CustomLink to="/pages/intro" className="home-intro">Intro Songs</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/pages/communion" className="home-intro">Communion Songs</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/pages/adoration" className="home-intro">Adoration Songs</CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/pages/hymns" className="home-intro">Hymns</CustomLink>
                        </li>
                    </ul>


                </div>
            </nav>
        </>
    );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )

}

export default Navbar