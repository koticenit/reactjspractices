import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import conditionRendering from './conditionRendering';
import * as serviceWorker from './serviceWorker';

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
  
  

  export default conditionRendering;