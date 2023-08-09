'use client';
import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { menuNavigate } from '@/constants/constants';
import CartIcon from '@/assets/CartIcon';
import { User } from 'phosphor-react';
import CustomizedMenus from '../UI/CustomizedMenu/CustomizedMenu';

function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const showAlert = ({ el }: { el: string }) => {
    el === 'Features' ? <CustomizedMenus key="Features" /> : alert(`You choose ${el}`);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          mt: 5.7,
          paddingX: '100px',
        }}
      >
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: 'normal',
          }}
        >
          Logo Here
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            direction: 'row',
            marginLeft: '400px',
          }}
        >
          {menuNavigate.map((el) => {
            return (
              <Typography
                onClick={() => showAlert({ el })}
                key={el}
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
                {el === 'Features' ? <CustomizedMenus key="Features" /> : el}
              </Typography>
            );
          })}

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
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
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
        <Divider />
      </Menu>
    </>
  );
}

export default Header;
