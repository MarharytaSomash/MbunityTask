import React from 'react';
import { Box, Typography } from '@mui/material';
import ContactItem from '../../Main/Contact/ContactItem';
import EmailIcon from '@/assets/EmailIcon';
import PhoneIcon from '@/assets/PhoneIcon';
import LocationIcon from '@/assets/LocationIcon';

function FooterBlockContact() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        maxWidth: '331px',
        maxHeight: 23.4,
        marginLeft: 12.5,
      }}
    >
      <Typography
        style={{
          color: '#FFF',
          fontFamily: ' Poppins',
          fontSize: '18px',
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: '26px',
          marginTop: '30px',
        }}
      >
        Reach as
      </Typography>
      <ContactItem
        icon={
          <PhoneIcon
            style={{
              width: 24,
              height: 24,
              color: '#000000',
            }}
          />
        }
        text="+1012 3456 789"
      />
      <ContactItem
        icon={<EmailIcon style={{ width: 24, height: 24, color: '#000000' }} />}
        text="example@email.com"
      />
      <ContactItem
        icon={<LocationIcon style={{ width: 24, height: 24, color: '#000000' }} />}
        text="132 Dartmouth Street Boston, Massachusetts 02156 United States"
      />
    </Box>
  );
}

export default FooterBlockContact;
