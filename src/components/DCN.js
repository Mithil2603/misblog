import React from 'react';
import './Basic_Functions.css';
import Collapse from './Collapse';
import img from './images/communication.drawio.svg';
import img1 from './images/Multiplexer.drawio.svg';

export default function DCN() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="title"><b>Data Communication & Networking Notes</b></h1>
          <hr />
          <h2 className="secondary-title"><b>Data Communication</b></h2>
          <div className="description1">
            <p className='text'>
              <ul>
                <li>Data Communication is the exchange or sharing of information between two computers/devices.</li>
                <li>The exchange of data between two devices via some form of transmission medium such as a wire or cable or without any physical medium via wifi.</li>
                <li><b>Data Communication between two computers: </b>both near to each other and anywhere in the world...</li>
              </ul>
              <p className="text-primary">
                <Collapse title="Click For Additional Info" desc="It is a streams of zeros and ones that the computers send and recieve. It is the magic of data communication technology."></Collapse>
              </p>
              <ul>
                <li>For enabling data communication, a combination of Hardware & Software is essential i.e. physical equipment and program.</li>
              </ul>
              <img className='img-scroll' src={img} alt="Idea of Communication"/>
            </p>
            <hr />
          </div>
          <h2 className="secondary-title"><b>Real Life Communication</b></h2>
          <div className="description1">
            <ul>
              <li>Real life data communication process involves many hardware devices and software techniques.</li>
            </ul>
            <img className='img-scroll' src={img1} alt="Idea of Communication"/>
          </div>
        </div>
      </div>
    </>
  )
}
