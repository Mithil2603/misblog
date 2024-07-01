import React from 'react'
import './Basic_Functions.css'

export default function Basic_Functions_Management() {
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="title">Basic Functions of Management</h1>
        <hr />
        <h2 className="secondary-title">Basic Functions of Management are POSDC</h2>
        <p className="text">
          There are 5 Functions of Management.
        </p>
        <div className="m-list">
          <li>Planning</li>
          <li>Organizing</li>
          <li>Staffing</li>
          <li>Directing</li>
          <li>Controlling</li>
        </div>
        <p className="description">
          <ol>
            <h3><li>Planning</li></h3>
            <p className='text'>
              <ul>
                <li>Planning is the process of deciding in advance, course of action to be followed, when and how to undertake those actions.</li>
                <li>Decision making for path for <i>'From where - to where we have to reach'.</i>
                  <ul className='text-indent'>
                    <li>When to do?</li>
                    <li>How to do?</li>
                  </ul>
                </li>
              </ul>
            </p>
            <h3><li>Organizing</li></h3>
            <p className='text'>
              <ul>
                <li>Organizing is the grouping of people and activities in order to facilitate the achievement.</li>
                <li>Manager organize tasks by dividing activities, assigning duties and delegating authority for effective operation.</li>
              </ul>
            </p>
            <h3><li>Staffing</li></h3>
            <p className='text'>
              <ul>
                <li>Process of putting right people to right job at the right time.
                  <ul className='text-indent'>
                    <li>like defining the requirements</li>
                    <li>selecting effective executives</li>
                  </ul>
                </li>
              </ul>
            </p>
          </ol>
        </p>
      </div>
    </div>
  )
}
