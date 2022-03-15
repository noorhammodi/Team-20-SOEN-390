import React from 'react';

function MessageReceive() {
  return (
    <div className={classes.messageRow}>
      <div>
        <div className={classes.displayName}>Oliver</div>
        <div className={classes.messageBlue}>
          <div>
            <p className={classes.messageContent}>Hello whats up?</p>
          </div>
          <div className={classes.messageTimeStampRight}>01/02 21:34</div>
        </div>
      </div>
    </div>
  );
}

export default MessageReceive;
