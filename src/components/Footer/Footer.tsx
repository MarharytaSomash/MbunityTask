import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import FooterWrapper from './FooterWrapper/FooterWrapper';

function Footer() {
  return (
    <>
      <Box
        flexDirection="column"
        sx={{
          width: '100%',
          height: '580px',
          background: '#000',
          mt: '50px',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#FFF',
            fontFamily: 'Inter',
            fontSize: 36,
            fontStyle: 'normal',
            fontWeight: 800,
            lineHeight: 'normal',
            margin: '0 auto',
            textAlign: 'center',
            mt: '80px',

            '@media (max-width: 950px)': {
              mt: '19px',
            },
          }}
        >
          Logo Here
        </Typography>

        <Divider
          sx={{
            width: '1280.5px',
            height: '2px',
            background: '#FFF',
            marginTop: '45px',
            marginLeft: '80px',
            '@media (max-width: 950px)': {
              width: '90%',
              margin: '20px auto',
            },
          }}
        />
        <FooterWrapper />
      </Box>
    </>
  );
}

export default Footer;
