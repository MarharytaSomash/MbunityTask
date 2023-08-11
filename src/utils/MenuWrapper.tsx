import React, { useState } from 'react';
import { Box, Typography, IconButton, Tooltip, Stack, Toolbar } from '@mui/material';
import { User } from 'phosphor-react';
import CartIcon from '@/assets/CartIcon';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { menuNavigate } from '@/constants/constants';
import CustomizedMenu from '@/components/UI/CustomizedMenu';

function MenuWrapper() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const showAlert = ({ el }: { el: string }) => {
    el === 'Features' ? <CustomizedMenu key="Features" /> : alert(`You choose ${el}`);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        className="mobile-menu"
        sx={{
          alignItems: 'center',
          textAlign: 'center',
          direction: 'row',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {menuNavigate.map((el: string, index) => (
          <Typography
            onClick={() => showAlert({ el })}
            key={index}
            sx={{
              minWidth: 90,
              color: '#1F1F1F',
              fontFamily: 'Roboto',
              fontSize: 16,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            {el === 'Features' ? <CustomizedMenu key="Features" /> : el}
          </Typography>
        ))}

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Stack direction="row" spacing={4.5}>
              <User
                style={{
                  width: 31,
                  height: 31,
                  borderRadius: '50%',
                  border: '1px solid black',
                  padding: 0.5,
                }}
              />
            </Stack>
          </IconButton>
        </Tooltip>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Stack direction="row" spacing={4.5}>
              <CartIcon
                sx={{
                  width: 31,
                  height: 31,
                  borderRadius: '50%',
                  border: '1px solid black',
                  p: 0.5,
                }}
              />
            </Stack>
          </IconButton>
        </Tooltip>
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
    </>
  );
}

export default MenuWrapper;
