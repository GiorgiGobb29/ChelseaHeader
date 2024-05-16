import React from 'react';
import { Link } from 'react-router-dom';
import "./layout.css";

export const Layout = () => {
    const pages = [
        { id: 1, name: "Home" },
        { id: 2, name: "About" },
        { id: 3, name: "Contact" },
        { id: 4, name: "Portfolio" },
        { id: 5, name: "Product" }
    ];

    return (
        <div className='nav'>
            <div className='logo'>Logo</div>
            <div className='pages'>
                {pages.map((page) => (
                    <div key={page.id}>
                        <div>
                            <Link to={page.name === "Home" ? "/" : `/${page.name}`} className='nav-item'>{page.name}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
