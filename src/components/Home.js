import React from 'react'
import './Basic_Functions.css'
import mis from './images/mis.png';
import php from './images/PHP-logo.png';
import dcn from './images/dcn.jpg';
import linux from './images/linux.jpg'
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container d-flex flex-wrap justify-content-center gap-5">
                <div className="card text-center">
                    <img src={mis} className="card-img-top img-fluid" alt="MIS thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Management Information System</h5>
                        <p className="card-text ct">A management information system is an information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. The study of the management information systems involves people, processes and technology in an organizational context.</p>
                        <Link to="/basicfunctionsmanagement"><a href="/" className="btn btn-dark">View Notes</a></Link>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={php} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">PHP</h5>
                        <p className="card-text1 ct">PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.</p>
                        {/* <a href="#" className="btn btn-dark">View Notes</a> */}
                        <Link to="/php"><a href="/" className="btn btn-dark nostyle">View Notes</a></Link>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={dcn} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Data Communication and Networking</h5>
                        <p className="card-text2 ct">Data communications refers to the transmission of this digital data between two or more computers and a computer network or data network is a telecommunications network that allows computers to exchange data. The physical connection between networked computing devices is created using either a cable or wireless device.</p>
                        <Link to="/dcn"><a href="/" className="btn btn-dark nostyle">View Notes</a></Link>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={linux} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Linux Programming</h5>
                        <p className="card-text2 ct">Linux is a powerful and flexible family of operating systems that are free to use and share. It was created by a person named Linus Torvalds in 1991. What’s cool is that anyone can see how the system works because its source code is open for everyone to explore and modify. The Linux Operating System is a type of operating system that is similar to Unix, and it is built upon the Linux Kernel. The Linux Kernel is like the brain of the operating system because it manages how the computer interacts with its hardware and resources. It makes sure everything works smoothly and efficiently.</p>
                        <Link to="/linux"><a href="/" className="btn btn-dark nostyle">View Notes</a></Link>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={linux} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Linux Commands</h5>
                        <p className="card-text2 ct">Linux provides a vast set of commands used to operate the command-line interface, known as the Terminal, in Linux operating systems. These commands are often used in Shell scripting.</p>
                        <Link to="/linux_commands"><a href="/" className="btn btn-dark nostyle">View Commands</a></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
