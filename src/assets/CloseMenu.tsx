import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

function CloseMenu(props: any) {
  return (
    <SvgIcon {...props} viewBox="0 0 18 19">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="akar-icons:cross">
          <path
            id="Vector"
            d="M20 20L4 4M20 4L4 20"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default CloseMenu;
