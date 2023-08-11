import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import OpenMenu from '@/assets/OpenMenu';
import CloseMenu from '@/assets/CloseMenu';
import MenuWrapperMobile from '@/utils/MenuWrapperMobile';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <IconButton color="inherit" aria-label="menu" onClick={toggleMenu}>
        {isMenuOpen ? <CloseMenu /> : <OpenMenu />}
      </IconButton>
      {isMenuOpen && <MenuWrapperMobile toggleMenu={toggleMenu} />}
    </div>
  );
}

export default MobileMenu;
