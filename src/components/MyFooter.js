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
        <div className="row">
          <div className="col-lg-3 mb-3">
            <Link className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/home" aria-label="iNotes">
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="d-block me-2" viewBox="0 0 118 94" role="img"><title>iNotes</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg> */}
              <img src={mylogo} alt="site-logo" width="60"/>
              <span className="fs-5 mx-3">iNotes</span>
            </Link>
            <ul className="list-unstyled small">
              <li className="mb-2">Designed and built for the SEM 5 Students of BCA & BSC CS Students by <a href="https://linkedin.com/in/sutharmithil">Mithil Suthar</a>.</li>
              <li className="mb-2">Copyright &copy; by <a href="https://linkedin.com/in/sutharmithil" target="_blank" rel="license noopener">Mithil Suthar</a><br></br>Webpage <a href="https://mithil2603.github.io/misblog/" target="_blank" rel="license noopener">iNotes</a> By <span id='copyright'>{currentYear}</span></li>
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
              <li className="mb-2"><a href="https://linkedin.com/in/sutharmithil" target="_blank" rel="noopener">LinkedIn Profile</a></li>
              <li className="mb-2"><a href="https://www.instagram.com/mithil__suthar/" target="_blank" rel="noopener">Instagram Account</a></li>
              <li className="mb-2"><a href="https://github.com/Mithil2603" target="_blank" rel="noopener">Github Account</a></li>
              <li className="mb-2"><a href="https://www.snapchat.com/add/mithil_suthar?share_id=DFU1Zrwk3IE&locale=en-US" target="_blank" rel="noopener">Snapchat Account</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
