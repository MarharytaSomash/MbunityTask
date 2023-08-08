import { useState } from 'react';
import Button from '@mui/material/Button';
import { CaretDown, CaretUp } from 'phosphor-react';
import { Box, MenuItem, Menu } from '@mui/material';

export default function CustomizedMenus() {
  const [openEl, setOpenEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setOpenEl(event.currentTarget);
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setOpenEl(null);
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Button
        id="demo-customized-button"
        aria-controls={openEl ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openEl ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          minWidth: 90,
          color: '#1F1F1F',
          fontFamily: 'Roboto',
          fontSize: 16,
          fontWeight: 400,
          lineHeight: 'normal',
          textTransform: 'none',
          cursor: 'pointer',
        }}
      >
        Features
        {isOpen ? <CaretUp /> : <CaretDown />}
      </Button>
      <Menu
        id="demo-customized-menu"
        anchorEl={openEl}
        open={Boolean(openEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          Number 1
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Number 2
        </MenuItem>
        <MenuItem onClick={handleClose} disableRipple>
          Number 3
        </MenuItem>
      </Menu>
    </Box>
  );
}
