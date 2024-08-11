import React from 'react'
import './Basic_Functions.css'
import Collapse from './Collapse.js'
import pic1 from './images/mispic1.svg'

export default function Basic_Functions_Management() {
  return (
    <div className="main-container">
      <div className="container">
        <h1 className="title"><b>What is Management?</b></h1>
        <p className="text">
          Management is a process of achieving an organization's goals and objectives by making the fullest use of available resources like men, materials, machines, money, methods etc.
        </p>
        <hr />
        <h1 className="title"><b>Key Aspects of Management</b></h1>
        <p className="text">
          <ul className='mx-4'>
            <li>Management is a process</li>
            <li>Managers achieve goals using resources</li>
            <li>Managers play many roles and engage in organizing, making decisions, leading, and controlling</li>
          </ul>
        </p>
        <hr />
        <h1 className="title"><b>Basic Functions of Management</b></h1>
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
                <li>The planning function should answer some basic questions, such as :</li>
                  <ul className='text-indent'>
                    <li>When to do?</li>
                    <li>How to do?</li>
                    <li>Who is it to do?</li>
                    <li>How is it to be done?</li>
                    <li>Where is it to be done?</li>
                    <li>Why is it to be done?</li>
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
        <img className='fiximg' src={pic1} alt="Management as a control system" />
        <p className="text">
          A reliable and effective control system has the following features:
        </p>
        <Collapse title="Click For Short Form" shortForm="FAIR PEES" desc="(This is the short form to remember the points of Control System.)"></Collapse>
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
            <h4><li>Feedback</li></h4>
            <p className='text'>
              <ul>
                <li>The control system would be effective, if it continuously monitors the performance and sends the information to the control center for action. It should not only highlight the progress but also the deviations.</li>
              </ul> 
            </p>
            <h4><li>Accurate & Timely</li></h4>
            <p className='text'>
              <ul>
                <li>The feedback should be accurate in terms of results and should be communicated in time for corrective action.</li>
              </ul> 
            </p>
            <h4><li>Realistic</li></h4>
            <p className='text'>
              <ul>
                <li>The system should be realistic so that the cost of control is far less than the benefits. The standards are realistic and are believed as achievable. Sufficient incentive and rewards are to be provided to motivate the people.</li>
              </ul> 
            </p>
            <h4><li>Information flow</li></h4>
            <p className='text'>
              <ul>
                <li>The system should have the information flow aligned with the organization structure and the decision makers should ensure that the right people get the right information for action and decision making</li>
              </ul> 
            </p>
            <h4><li>Exception principle</li></h4>
            <p className='text'>
              <ul>
                <li>The system should selectively approve some significant deviations from the performance standards on the principle of management by exception.</li>
              </ul> 
            </p>
          </ol>
        </div>
      </div>
    </div>
  )
}
