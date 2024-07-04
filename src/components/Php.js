import React from 'react'
import CodeBox from './CodeBox'

export default function Php() {
  const phpCode = `
    <?php
    echo "Hello, World!";
    ?>
  `;

  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="title"><b>PHP Notes</b></h1>
          <hr />
          <h2 className="secondary-title">What is PHP?</h2>
          <p className="text">
            PHP (Hypertext Preprocessor) is a popular open-source scripting language primarily used for web development. It is a server-side scripting language, which means that it runs on a web server and generates dynamic content that can be sent to a client's web browser.
          </p>
          <p className="text">
            PHP was originally created by Ramus Lerdorf in 1994 and has since become one of the most widely used language for building websites and web applications. It is particularly well-suited for web development due to its simplicity, flexibility, and broad community support.
          </p>
          <h3 className="secondary-title">Characteristics of PHP include:</h3>
          <p className='text'>
            <ul>
              <li><b>Syntax:</b></li>
              <p>Manager organize tasks by dividing activities, assigning duties and delegating authority for effective operation.</p>
              <CodeBox code={phpCode}></CodeBox>
            </ul>
          </p>
        </div>
      </div>
    </>
  )
}
