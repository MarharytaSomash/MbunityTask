import { Stack, Typography } from '@mui/material';
import React from 'react';

function Title() {
  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          margin: '0 auto',
        }}
        width={462}
        height={97}
        mt={18.4}
      >
        <Typography
          sx={{
            color: '#000',
            fontFamily: 'Poppins',
            fontSize: ' 40px',
            fontStyle: 'normal',
            fontWeight: '700',
            lineFeight: 'normal',
            marginTop: '20px',
          }}
        >
          Contact Us
        </Typography>
        <Typography
          sx={{
            color: '#717171',
            textAlign: 'center',
            fontFamily: 'Poppins',
            fontSize: ' 18px',
            fontStyle: ' normal',
            fontWeight: '500',
            lineHeight: 'normal',
            marginBottom: '50px',
          }}
        >
          Any question or remarks? Just write us a message!
        </Typography>
      </Stack>
    </>
  );
}

export default Title;
