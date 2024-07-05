import React from 'react';
import './Basic_Functions.css';

export default function Collapse() {
  return (
    <>
      <p className="d-inline-flex gap-1">
        <button className="btn btn-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Click For Short Form
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <p className='text-primary'>FAIR PEES</p>
          <p>(This is the short form to remember the points of Control System.)</p>
        </div>
      </div>
    </>
  )
}
