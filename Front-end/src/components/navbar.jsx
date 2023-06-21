import React, { useState } from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-primary rounded-bottom mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" href="./">Game Controller</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="./get">Get</a>
                        <a className="nav-link" href="./post">Post</a>
                        <a className="nav-link" href="./put">Put</a>
                        <a className="nav-link" href="./delete">Delete</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;