import React from 'react'
import qa from './json/qa.json';
import './PhpIQ.css';

export default function PhpImpQues() {
    return (
        <>
            <main className="main-container">
                <div className="container">
                    <h1 className="title"><b>PHP Important Questions</b></h1>
                    <hr />
                    <ol>
                        {qa.map((questionObj) => (
                            <li key={questionObj.questionNo}>
                                <h3 className='bold'>{questionObj.question}</h3>
                                <p>{questionObj.answerParagraph}</p>
                                <ul>
                                    {questionObj.answerPoints.map((point, index) => (
                                        <li key={index}>{point}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </div>
            </main>
        </>
    )
}
