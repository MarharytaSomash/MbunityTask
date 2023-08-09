import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function EmailIcon(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 19">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="ic:sharp-email">
          <path id="Vector" d="M22 4H2V20H22V4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default EmailIcon;
