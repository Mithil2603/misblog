import React from 'react';
import './Collapse.css';

export default function Collapse() {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click For Short Form
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body card1">
          <p className='text-primary'>FAIR PEES</p>
          <p>(This is the short form to remember the points of Control System.)</p>
        </div>
      </div>
    </>
  )
}
