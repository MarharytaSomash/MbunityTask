import { Box, Typography } from '@mui/material';

const ContactItem = ({ icon, text }: { icon: any; text?: String }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 6,
      '@media (max-width:950px)': {
        flexDirection: 'column',
        width: '100%',
        margin: '10px auto',
        textAlign: 'center',
        alignItems: 'center',
      },
    }}
  >
    {icon}
    {text && (
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: 'normal',
          color: '#FFFFFF',
          marginLeft: '25px',
          maxWidth: '288px',
          minWidth: '24px',
          maxHeight: 6,
          '@media (max-width:950px)': {
            flexDirection: 'column',
            width: '100%',
            margin: '10px auto',
            fontSize: '12px',
            textAlign: 'center',
            alignItems: 'center',
          },
        }}
      >
        {text}
      </Typography>
    )}
  </Box>
);
export default ContactItem;
