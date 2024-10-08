import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">iNotes</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categories</a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/php">PHP</Link>
                                    {/* <li><hr className="dropdown-divider"/></li> */}
                                    <Link className="dropdown-item" to="/basicfunctionsmanagement">Management Information System</Link>
                                    <Link className="dropdown-item" to="/dcn">Data Communication & Networking</Link>
                                    <Link className="dropdown-item" to="/linux">Linux Programming</Link>
                                    <Link className="dropdown-item" to="/linux_commands">Linux Commands</Link>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Important Questions</a>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to="/phpquestions">PHP</Link>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
