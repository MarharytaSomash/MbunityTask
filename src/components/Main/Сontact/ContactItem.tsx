import { Box, Typography } from '@mui/material';

const ContactItem = ({ icon, text }: { icon: any; text?: String }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 6.3,
    }}
  >
    {icon}
    {text && (
      <Typography
        style={{
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
        }}
      >
        {text}
      </Typography>
    )}
  </Box>
);
export default ContactItem;
