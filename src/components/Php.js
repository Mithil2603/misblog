import React from 'react'
// import CodeBox from './CodeBox'

export default function Php() {
  return (
    <>
      <div className="main-container">
        <div className="container">
          <h1 className="title"><b>PHP Notes</b></h1>
          <hr />
          <h2 className="secondary-title">What is PHP?</h2>
          <p className="text">
            <b>PHP</b> <span className='text-primary'>(Hypertext Preprocessor)</span> is a popular open-source scripting language primarily used for web development. It is a server-side scripting language, which means that it runs on a web server and generates dynamic content that can be sent to a client's web browser.
          </p>
          <p className="text">
            PHP was originally created by Ramus Lerdorf in 1994 and has since become one of the most widely used language for building websites and web applications. It is particularly well-suited for web development due to its simplicity, flexibility, and broad community support.
          </p>
          <h3 className="third-title">Characteristics of PHP include:</h3>
          <div className="description1">
            <p className='text'>
              <ul><li><b>Syntax</b></li></ul>
              PHP Syntax is similar to C, Java, and other programming languages, making it relatively easy to learn and use.
            </p>
            <ul><li><b>Server-Side Scripting</b></li></ul>
            <p className='text'>
              PHP Scripts are executed on the server before the resulting HTML is sent to the client's browser, allowing dynamic generation of web content.
            </p>
            <ul><li><b>Integration</b></li></ul>
            <p className='text'>
              PHP can be embedded within HTML code making it easy to mix dynamic and static content.
            </p>
            <ul><li><b>Database Connectivity</b></li></ul>
            <p className='text'>
              PHP has extensive support for connecting to databases, enabling the creation of database-driven web application.
            </p>
            <ul><li><b>Cross-Platform Compatibility</b></li></ul>
            <p className='text'>
              PHP can run on various operating systems (Windows, Linux, MacOS) and be deployed on a wide range of web servers.
            </p>
            <ul><li><b>Large Community & Ecosystems</b></li></ul>
            <p className='text'>
              PHP has a vast community of developers, which means there are numerous libraries, frameworks (such as Laravel, Symfony, and CodeIgniter), and resources available to aid in development.
            </p>
            <ul><li><b>Open-Source Nature</b></li></ul>
            <p className='text'>
              PHP is an open-source language, which means it is freely available and continually evolving through contributions from the community.
            </p>
            <p className="text">
              PHP can be used to perform a wide range of web-related tasks, including handling from data, processing user input, interacting with databases, creating dynamic web pages, generating PDF's, working with files, and much more. It provides various built-in functions and extensive documentation to support developers in their projects.
            </p>
            <h3 className="third-title">Introduction to Dynamic Web Content with PHP</h3>
            <p className="text">
              Dynamic Web Content refers to web pages that can change and adapt based on user input, database interactions, or other external factors. PHP is a widely used server side scripting language that enables the creation of dynamic web content. It allows developers to embed PHP code within HTML, interact with databases, process from data, and generate personalised web pages on the fly.
            </p>
            <p className="text"><b>How?</b></p>
            <ul><li><b>Server-Side Execution</b></li></ul>
            <p className='text'>
              PHP is executed on the server before the resulting HTML is sent to the client's web browser. This means that PHP code can perform complex computations, interact with databases, and generate customized content based on various factors.
            </p>
            <ul><li><b>Embedding PHP in HTML</b></li></ul>
            <p className='text'>
              PHP code can be seamlessly embedded within HTML files, allowing developers to mix dynamic and static content within a single file. This Integration enables the creation of dynamic web pages by combining HTML structures with PHP logic and data manipulation.
            </p>
            <ul><li><b>Interacting with Databases</b></li></ul>
            <p className='text'>
              PHP provides extensive support for connecting to databases such as MySQL, PostgreSQL, and others. Developers can use PHP's databases functions to query, insert, update, or delete data from the databases. This enables the creation of dynamic web applications that retrieve and display information from a database based on user requests.
            </p>
            <ul><li><b>Processing from Data</b></li></ul>
            <p className='text'>
              PHP is commonly used to handle form submissions on web pages. When a user submits the form. PHP can receieve the form data, validate & sanitize it, and perform future actions such as storing it in a database, sending emails, or generating a response based on the input received.
            </p>
            <ul><li><b>Conditional Logic and Loops</b></li></ul>
            <p className='text'>
              PHP allows developers to use Conditional Statements (eg. if-else, switch) and loops (eg. for, while) to execute different sections of code based on specific conditions or repeat certain tasks. The flexibility enables dynamic content generation based on different scenarios, user roles, or system states.
            </p>
            <ul><li><b>Session & Cookie Management</b></li></ul>
            <p className='text'>
              PHP provides mechanisms for managing user sessions and cookies. Sessions enables the storage of user-specific data across multiple page visits, while cookies allows the storage of user information on the client-side. These features are crucial for implementation user authentication, personalization, and maintaining stateful interactions.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
