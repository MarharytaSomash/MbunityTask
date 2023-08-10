import React from 'react';
import { warning } from '@/components/UI/CommonStyle';
import { Typography } from '@mui/material';

const renderErrorMessage = (name: string, touched: any, errors: any) => {
  if (touched[name] && errors[name]) {
    return <Typography sx={{ ...warning }}>{errors[name]}</Typography>;
  }
  return null;
};

export default renderErrorMessage;
