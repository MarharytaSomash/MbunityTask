import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@/assets/PhoneIcon';
import EmailIcon from '@/assets/EmailIcon';
import LocationIcon from '@/assets/LocationIcon';
import { sectionStyles, titleStyles, labelStyles } from '@/constants/constants';
import ContactItem from '@/components/Main/Сontact/ContactItem';
import Social from './Social';
import styles from '../Main.module.scss';

function ConctactBlock() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '1196px',
        height: '667px',
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)',
        margin: '0 auto',
      }}
    >
      <Box sx={sectionStyles}>
        <Typography sx={titleStyles}>Contact Information</Typography>
        <Typography sx={labelStyles}>Say something to start a live chat!</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '288px',
            maxHeight: 24.5,
            marginLeft: 5,
            marginTop: '60px',
          }}
        >
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

          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              background: '#1a1a1a',
              borderRadius: '50%',
            }}
          >
            <Box className={styles.smallCircle} />
            <Box className={styles.bigCircle} />
          </Box>
          <Social />
        </Box>
      </Box>
    </Box>
  );
}

export default ConctactBlock;
