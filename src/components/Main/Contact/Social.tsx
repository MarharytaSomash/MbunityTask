import React from 'react';
import { Box, IconButton } from '@mui/material';
import ContactItem from './ContactItem';
import TwitterIcon from '@/assets/TwitterIcon';
import InstagramIcon from '@/assets/InstagramIcon';
import SmileIcon from '@/assets/SmileIcon';

function Social() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '134px',
        '@media (max-width:950px)': {
          width: '100%',
          margin: '50px auto',
          textAlign: 'center',
          alignItems: 'center',
        },
      }}
    >
      <IconButton
        sx={{
          marginRight: '24px',
        }}
      >
        <ContactItem
          icon={
            <TwitterIcon
              style={{
                width: 30,
                height: 30,
                color: '#000000',
              }}
            />
          }
        />
      </IconButton>
      <IconButton sx={{ marginRight: '24px' }}>
        <ContactItem icon={<InstagramIcon style={{ width: 30, height: 30, color: '#000000' }} />} />
      </IconButton>
      <IconButton sx={{ marginRight: '24px' }}>
        <ContactItem icon={<SmileIcon style={{ width: 30, height: 30, color: '#000000' }} />} />
      </IconButton>
    </Box>
  );
}
export default Social;
