import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { User } from 'phosphor-react';
import CartIcon from '@/assets/CartIcon';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { menuNavigate } from '@/constants/constants';
import CloseMenu from '@/assets/CloseMenu';

function MenuWrapperMobile({ toggleMenu }: { toggleMenu: () => void }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const showAlert = ({ el }: { el: string }) => {
    alert(`You choose ${el}`);
  };

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        width: '100%',
        height: '100vh',
        background: '#000',
        color: '#FFF',
        zIndex: 10,
        flexDirection: 'column',
      }}
    >
      <IconButton
        onClick={toggleMenu}
        sx={{
          position: 'absolute',
          top: '29px',
          right: '20px',
          color: '#FFF',
        }}
      >
        <CloseMenu />
      </IconButton>
      <Typography
        // variant="h6"
        sx={{
          color: '#FFF',
          paddingTop: '29px',
          fontSize: '18px',
          marginLeft: '20px',
        }}
      >
        Logo Here
      </Typography>
      {menuNavigate.map((el: string) => (
        <Typography
          key={el}
          onClick={() => showAlert({ el })}
          sx={{
            marginTop: '30px',
            marginLeft: '23px',
            color: '#FFF',
            fontSize: 14,
            cursor: 'pointer',
          }}
        >
          {el}
        </Typography>
      ))}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          marginTop: '200px',
        }}
      >
        <IconButton onClick={handleClick} size="small" aria-haspopup="true">
          <User
            style={{
              width: 31,
              height: 31,
              borderRadius: '50%',
              border: '1px solid white',
              background: '#FFF',
              padding: 0.5,
            }}
          />
        </IconButton>

        <IconButton onClick={handleClick} size="small" aria-haspopup="true">
          <CartIcon
            sx={{
              width: 31,
              height: 31,
              borderRadius: '50%',
              border: '1px solid white',
              background: '#FFF',
              p: 0.5,
            }}
          />
        </IconButton>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          sx: {
            overflow: 'visible',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MenuWrapperMobile;
