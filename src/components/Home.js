import React from 'react'
import './Basic_Functions.css'

export default function Home() {
    return (
        <>
            <div className="container d-flex flex-wrap justify-content-center gap-5">
                <div className="card text-center">
                    <img src={"https://miro.medium.com/v2/resize:fit:1400/0*2xjniRnDbI6fCEff.png"} className="card-img-top img-fluid" alt="MIS thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">Management Information System</h5>
                        <p className="card-text">A management information system is an information system used for decision-making, and for the coordination, control, analysis, and visualization of information in an organization. The study of the management information systems involves people, processes and technology in an organizational context.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div className="card text-center">
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1067px-PHP-logo.svg.png?20180502235434"} className="card-img-top img-fluid" alt="PHP thumbnail" />
                    <div className="card-body">
                        <h5 className="card-title">PHP</h5>
                        <p className="card-text1">PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995. The PHP reference implementation is now produced by the PHP Group.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        </>
    )
}
