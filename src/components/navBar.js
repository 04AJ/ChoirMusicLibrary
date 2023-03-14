import React, { useState, Component } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        St. Mary's Youth Choir
                    </Link>

                    <div className="pages">
                        <>
                            <CustomLink to="/pages/intro" className="link intro">Intro Songs</CustomLink>
                        </>
                        <>
                            <CustomLink to="/pages/communion" className="link comm">Communion Songs</CustomLink>
                        </>
                        <>
                            <CustomLink to="/pages/adoration" className="link ado">Adoration Songs</CustomLink>
                        </>
                        <>
                            <CustomLink to="/pages/hymns" className="link hymns">Hymns</CustomLink>
                        </>
                        <>
                            <CustomLink to="/pages/todo" className="link hymns">Todos</CustomLink>
                        </>
                    </div>


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