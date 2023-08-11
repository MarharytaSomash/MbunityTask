import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { commonTypographyStyles, footerWrapperStyle } from '../../UI/CommonStyle';
import { ColumnFooter1, ColumnFooter2, ColumnFooter3 } from '@/constants/constants';
import styles from './FooterWrapperStyle.module.scss';

function FooterBlockAbout() {
  return (
    <Grid
      className={styles.footer_block_about}
      container
      style={{
        ...footerWrapperStyle,
      }}
    >
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          sx={{
            ...commonTypographyStyles,
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Company
        </Typography>
        {ColumnFooter1.map((item: string, index: number) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              ...commonTypographyStyles,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          sx={{
            ...commonTypographyStyles,
            fontSize: '18px',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Legal
        </Typography>
        {ColumnFooter2.map((item: string, index: number) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              ...commonTypographyStyles,
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Typography
          variant="subtitle1"
          sx={{
            ...commonTypographyStyles,
            fontSize: '18px',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          Quick Links
        </Typography>
        {ColumnFooter3.map((item: string, index: number) => (
          <Typography
            key={index}
            variant="body1"
            sx={{
              ...commonTypographyStyles,
              fontSize: '16px',
              fontWeight: 400,
            }}
          >
            {item}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
}

export default FooterBlockAbout;
