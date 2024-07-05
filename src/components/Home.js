import React from 'react'
import './Basic_Functions.css'
import mis from './images/mis.png';
import php from './images/PHP-logo.png';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container d-flex flex-wrap justify-content-center gap-5">
                <div className="card text-center">
                    <img src={mis} className="card-img-top img-fluid" alt="MIS thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Management Information System</h5>
                        <p className="card-text">A management information system is an information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. The study of the management information systems involves people, processes and technology in an organizational context.</p>
                        <Link to="/php"><a className="btn btn-dark">View Notes</a></Link>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={php} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">PHP</h5>
                        <p className="card-text1">PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.</p>
                        {/* <a href="#" className="btn btn-dark">View Notes</a> */}
                        <Link to="/basicfunctionsmanagement"><a href="#" className="btn btn-dark nostyle">View Notes</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
