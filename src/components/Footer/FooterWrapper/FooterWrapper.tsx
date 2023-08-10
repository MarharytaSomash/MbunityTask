import React from 'react';
import { Box } from '@mui/material';
import FooterBlockContact from './FooterBlockContact';
import FooterBlockAbout from './FooterBlockAbout';
import SubscribeForm from './SubscribeForm';

function FooterWrapper() {
  return (
    <Box style={{ display: 'flex', flexDirection: 'row' }}>
      <FooterBlockContact />
      <FooterBlockAbout />
      <SubscribeForm />
    </Box>
  );
}

export default FooterWrapper;
