'use client';
import React from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { SubscribeType } from '@/types/types';
import {
  subscribeButtonStyle,
  subscribeTitleStyle,
  subscribeInput,
  subscribeAttention,
} from '@/components/UI/CommonStyle';
import renderErrorMessage from '@/utils/renderErrorMessage';
import { validationSchema } from '@/utils/validationShema';
import { Formik, Form, Field } from 'formik';
import styles from './FooterWrapperStyle.module.scss';

function SubscribeForm() {
  const handleSubmit = (values: SubscribeType) => {
    alert('You submitted your data');
  };

  return (
    <Box
      className={styles.subscribe_form}
      sx={{
        width: '304px',
        height: '184px',
        borderRadius: '10px',
        background: '#131313',
        mt: '19px',
        mr: '80px',
        ml: '20px',

        '@media (max-width: 950px)': {
          width: '320px',
          height: '175px',
        },
      }}
    >
      <Typography sx={{ ...subscribeTitleStyle }}> Join Our Newsletter</Typography>
      <Formik
        initialValues={{
          email: 'Your address',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '277px',
                margin: '0 13px',
              }}
            >
              <Field name="email">
                {({ field }: { field: any }) => (
                  <Box>
                    <TextField
                      {...field}
                      id="subscribe"
                      type="email"
                      sx={{
                        ...subscribeInput,
                        '& input': {
                          color: '#616161',
                        },
                      }}
                    />
                    {renderErrorMessage('email', touched, errors)}
                  </Box>
                )}
              </Field>
              <button type="submit" style={{ ...subscribeButtonStyle, outline: 'none' }}>
                Subscribe
              </button>
            </Box>
            <Typography
              sx={{
                ...subscribeAttention,
              }}
            >
              * Will send you weekly updates for your better tool management.
            </Typography>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default SubscribeForm;
