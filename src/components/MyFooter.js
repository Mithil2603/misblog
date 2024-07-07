import React from 'react';
import { useState, useEffect } from 'react';
import mylogo from './images/iNotes.svg'
import { Link } from 'react-router-dom';
import './Basic_Functions.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update current year on component mount
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary gray">
      <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
        <div className="row justify-content-center">
          <div className="col-lg-3 mb-3">
            <Link className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/home" aria-label="iNotes">
              <img src={mylogo} alt="site-logo" width="60"/>
              <span className="fs-5 mx-3">iNotes</span>
            </Link>
            <ul className="list-unstyled small">
              <li className="mb-2">Designed and built for the SEM 5 Students of BCA & BSC CS by <a href="https://linkedin.com/in/sutharmithil">Mithil Suthar</a>.</li>
              <li className="mb-2">Copyright &copy; by <a href="https://linkedin.com/in/sutharmithil">Mithil Suthar</a><br></br>Webpage <a href="https://mithil2603.github.io/misblog/">iNotes</a> | 2024 - <span id='copyright'>{currentYear}</span></li>
            </ul>
          </div>
          <div className="col-6 col-lg-2 offset-lg-1 mb-3">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <Link className="mb-2" to="/home">Home</Link><br />
              <Link className="mb-2" to="/php">PHP</Link><br />
              <Link className="mb-2" to="/basicfunctionsmanagement">Management Information System</Link><br />
              <Link className="mb-2" to="/dcn">Data Communication & Networking</Link><br />
            </ul>
          </div>
          {/* <div className="col-6 col-lg-2 mb-3">
            <h5>Projects</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener">Bootstrap 5</a></li>
              <li className="mb-2"><a href="https://github.com/twbs/bootstrap/tree/v4-dev" target="_blank" rel="noopener">Bootstrap 4</a></li>
              <li className="mb-2"><a href="https://github.com/twbs/icons" target="_blank" rel="noopener">Icons</a></li>
              <li className="mb-2"><a href="https://github.com/twbs/rfs" target="_blank" rel="noopener">RFS</a></li>
              <li className="mb-2"><a href="https://github.com/twbs/examples/" target="_blank" rel="noopener">Examples repo</a></li>
            </ul>
          </div> */}
          <div className="col-6 col-lg-2 mb-3">
            <h5>Contact Me</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="https://linkedin.com/in/sutharmithil">LinkedIn Profile</a></li>
              <li className="mb-2"><a href="https://www.instagram.com/mithil__suthar/">Instagram Account</a></li>
              <li className="mb-2"><a href="https://github.com/Mithil2603">Github Account</a></li>
              <li className="mb-2"><a href="https://www.snapchat.com/add/mithil_suthar?share_id=DFU1Zrwk3IE&locale=en-US">Snapchat Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
