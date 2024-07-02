import React from 'react'
import './Basic_Functions.css'
import Collapse from './Collapse.js'

export default function Basic_Functions_Management() {
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="title"><b>Basic Functions of Management</b></h1>
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
            <h4><li>Planning</li></h4>
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
            <h4><li>Organizing</li></h4>
            <p className='text'>
              <ul>
                <li>Organizing is the grouping of people and activities in order to facilitate the achievement.</li>
                <li>Manager organize tasks by dividing activities, assigning duties and delegating authority for effective operation.</li>
              </ul>
            </p>
            <h4><li>Staffing</li></h4>
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
            <h4><li>Directing</li></h4>
            <p className='text'>
              <ul>
                <li>Process of activating the plans, structure and group efforts in the desired direction.</li>
                <li>It is needed for implementation of plans by providing the desired leadership, motivation and proper communication.</li>
              </ul>
            </p>
            <h4><li>Controlling</li></h4>
            <p className='text'>
              <ul>
                <li>Checking the process of plans and also correcting any deviations that may occur along the way.</li>
              </ul>
            </p>
          </ol>
        </p>
        <hr />
        <h2 className="secondary-title">Management as a control system</h2>
        <p className="text">
          A reliable and effective control system has the following features:
        </p>
        <Collapse></Collapse>
        <div className="description">
          <ol>
            <h4><li>Early Warning Mechanism</li></h4>
            <p className='text'>
              <ul>
                <li>This is a mechanism of predicting the possiblity of achieving the goals and standards before its too late and allowing the manager to take corrective actions.</li>
              </ul>
            </p>
            <h4><li>Performance Standards</li></h4>
            <p className='text'>
              <ul>
                <li>The Performance Standards must be measurable and acceptable to all the organizations. The System should have meaningful standards relating to the work areas, responsibility, managerial functions and so on.</li>
              </ul>
            </p>
            <h4><li>Strategic Controls</li></h4>
            <p className='text'>
              <ul>
                <li>In every business, there are strategic areas of control known as the critical success factors. The System should recognize them and have controls instituted on them.</li>
              </ul> 
            </p>
          </ol>
        </div>
      </div>
    </div>
  )
}
