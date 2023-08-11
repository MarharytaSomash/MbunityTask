import React from 'react';
import { Box } from '@mui/material';
import FooterBlockContact from './FooterBlockContact';
import FooterBlockAbout from './FooterBlockAbout';
import SubscribeForm from './SubscribeForm';
import styles from './FooterWrapperStyle.module.scss';

function FooterWrapper() {
  return (
    <Box
      className={styles.footer_wrapper}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        '@media (max-width: 950px)': {
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'center',
        },
      }}
    >
      <FooterBlockContact />
      <FooterBlockAbout />
      <SubscribeForm />
    </Box>
  );
}

export default FooterWrapper;

