'use client';

import React, { useState } from 'react';
import { Typography, Box, Toolbar, AppBar } from '@mui/material';
import MenuWrapper from '@/utils/MenuWrapper';
import MobileMenu from '@/utils/MobileMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <AppBar position="static" sx={{ background: '#f9f9f9' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: '100px',
          maxWidth: '1440px',
          flex: 1,
          '@media (max-width: 905px)': {
            display: 'flex',
            flexDirection: 'row',
          },
        }}
      >
        {isMenuOpen ? null : (
          <Typography
            sx={{
              color: '#000',
              fontFamily: 'Inter',
              fontSize: 24,
              fontStyle: 'normal',
              fontWeight: 800,
              flexGrow: 1,
              display: 'flex',
            }}
          >
            Logo Here
          </Typography>
        )}

        <Box
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MobileMenu />
        </Box>

        <MenuWrapper />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
