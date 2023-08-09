'use client';
import * as React from 'react';
import { useState } from 'react';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { TwitterIconState } from '@/types/types';
interface TwitterIconProps extends SvgIconProps {}

function TwitterIcon(props: TwitterIconProps) {
  const [isHovered, setIsHovered] = useState<TwitterIconState>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <SvgIcon
      {...props}
      viewBox="0 0 18 19"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 1000001749">
          <circle id="Ellipse 795" cx="15" cy="15" r="15" fill={isHovered ? 'white' : '#1B1B1B'} />
          <path
            id="Vector"
            d="M23 10.4255C22.4484 10.6598 21.8481 10.8284 21.2298 10.8941C21.8717 10.5185 22.3525 9.92521 
            22.5818 9.22545C21.9794 9.57833 21.3195 9.82578 20.6313 9.95681C20.3437 9.65402 19.9958 9.4128 19.6094
             9.24819C19.2229 9.08357 18.8062 8.99909 18.3852 9.00001C16.6816 9.00001 15.3116 10.3598 15.3116 12.0284C15.3116 
             12.2627 15.3405 12.497 15.3873 12.7225C12.8366 12.5911 10.5616 11.3911 9.04915 9.55385C8.77357 10.0174 8.62916
              10.5451 8.63093 11.0823C8.63093 12.1331 9.17354 13.0598 10.001 13.6047C9.51335 13.5858 9.03715 13.4538 8.6111
              13.2195V13.2568C8.6111 14.7284 9.66747 15.9479 11.0754 16.2284C10.811 16.296 10.5391 16.3306 10.266 16.3314C10.0659 
              16.3314 9.87658 16.3118 9.68549 16.2852C10.0749 17.4852 11.2087 18.3568 12.5589 18.3852C11.5026 19.2 10.1794 19.6793 
              8.7427 19.6793C8.48492 19.6793 8.24697 19.6704 8 19.642C9.36282 20.503 10.9798 21 12.7212 21C18.3744 21 21.4677 
              16.3882 21.4677 12.3852C21.4677 12.2539 21.4677 12.1225 21.4587 11.9911C22.0572 11.5598 22.5818 11.0254 23 10.4255Z"
            fill={isHovered ? 'black' : 'white'}
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default TwitterIcon;
