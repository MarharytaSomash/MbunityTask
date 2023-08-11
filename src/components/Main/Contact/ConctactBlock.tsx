import React from 'react';
import { Box, Typography } from '@mui/material';
import PhoneIcon from '@/assets/PhoneIcon';
import EmailIcon from '@/assets/EmailIcon';
import LocationIcon from '@/assets/LocationIcon';
import { sectionStyles, titleStyles, labelStyles } from '../../UI/CommonStyle';
import ContactItem from '@/components/Main/Contact/ContactItem';
import Social from './Social';
import styles from '../Main.module.scss';
import FormBlock from '../Form/FormBlock';

function ConctactBlock() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1196px',
        height: '667px',
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)',
        margin: '0 auto',
        '@media (max-width: 950px)': {
          display: 'flex',
          flexDirection: 'column',
          width: '310px',
          height: '1220px',
        },
      }}
    >
      <Box
        sx={{
          ...sectionStyles,
          '@media (max-width:950px)': {
            display: 'flex',
            flexDirection: 'column',
            width: '310px',
          },
        }}
      >
        <Typography
          sx={{
            ...titleStyles,
            '@media (max-width:950px)': {
              width: '100%',
              fontSize: '1.25rem',
              textAlign: 'center',
              margin: '15px auto',
              alignItems: 'center',
            },
          }}
        >
          Contact Information
        </Typography>
        <Typography
          sx={{
            ...labelStyles,
            '@media (max-width:950px)': {
              width: '100%',
              fontSize: '0.7rem',
              textAlign: 'center',
              margin: '6px auto',
            },
          }}
        >
          Say something to start a live chat!
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            maxWidth: '288px',
            height: 24.5,
            marginLeft: 5,
            marginTop: '60px',
            '@media (max-width:950px)': {
              height: '397px',
              alignItems: 'center',
              marginLeft: 2,
              marginTop: '12px',
            },
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
              '@media (max-width: 950px)': {
                display: 'none',
              },
            }}
          >
            <Box className={styles.smallCircle} />
            <Box className={styles.bigCircle} />
          </Box>
          <Social />
        </Box>
      </Box>
      <FormBlock />
    </Box>
  );
}

export default ConctactBlock;
