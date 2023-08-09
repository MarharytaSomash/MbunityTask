const menuNavigate = ['Home', 'Features', 'Blog', 'Shop', 'About', 'Contact'];
const inputItems = [
  { label: 'First Name', name: 'firstName', autoComplete: 'off', type: 'text' },
  { label: 'Last Name', name: 'lastName', autoComplete: 'off', type: 'text' },
  { label: 'Email', name: 'email', autoComplete: 'off', type: 'email' },
  {
    label: 'Phone Number',
    name: 'phone',
    autoComplete: 'off',
    type: 'number',
  },
];

const sectionStyles = {
  width: '491px',
  height: '647px',
  backgroundColor: '#000',
  borderRadius: '10px',
  margin: '10px',
};
const titleStyles = {
  color: '#FFF',
  fontFamily: 'Poppins',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
  marginTop: '40px',
  marginLeft: '40px',
};

const labelStyles = {
  color: '#C9C9C9',
  fontFamily: 'Poppins',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: 'normal',
  marginLeft: '40px',
  marginTop: '6px',
};
const radioStyle = {
  width: '92px',
  height: '20.4px',
  color: '#000',
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '20px',
};

export { menuNavigate, sectionStyles, titleStyles, labelStyles, inputItems, radioStyle };
