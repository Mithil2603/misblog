import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import svg from './images/content_paste_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg'

function CodeBox({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="card my-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5 className="mb-0">PHP</h5>
        <CopyToClipboard text={code} onCopy={handleCopy}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            className="bi bi-clipboard"
            viewBox="0 0 16 16">
              <path d="M10 1.5v1h1a.5.5 0 0 1 .5.5v1h1V2a2 2 0 0 0-2-2h-1v1.5zm2 3V5h-1v-.5H5V5H4v-.5a.5.5 0 0 1 .5-.5h1v-1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1h1a.5.5 0 0 1 .5.5z"/>
              <path d="M3.5 0a.5.5 0 0 0-.5.5v14a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-14a.5.5 0 0 0-.5-.5h-9zM4 1h8v13H4V1z"/>
              {copied && (
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="green"
                fontSize="12"
                fontWeight="bold"
              >
                Copied!
              </text>
            )}
          </svg>
        </CopyToClipboard>
      </div>
      <div className="card-body">
        <pre>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default CodeBox;

