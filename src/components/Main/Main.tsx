import Title from '@/utils/Title';
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import ConctactBlock from '@/components/Main/Сontact/ConctactBlock';

function Main() {
  return (
    <>
      <Title />
      <Box>
        <ConctactBlock />
      </Box>
    </>
  );
}

export default Main;
