import React from 'react';
import { TextField } from '@mui/material';

function MessageInput() {
  return (
    <TextField
      id="Message"
      label="Message"
      type="text"
      placeholder="Write your message"
      InputLabelProps={{
        shrink: true,
      }}
      sx={{
        width: '595px',
        mr: 5,
        mt: 5.3,
        color: '#8D8D8D',
        fontFamily: ' Poppins',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: ' 500',
        lineHeight: '20px',
      }}
      variant="standard"
    />
  );
}

export default MessageInput;
