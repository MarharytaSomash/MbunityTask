'use client';
import React from 'react';
import { TextField, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { UserInterface } from '@/types/types';
import { validationSchema } from '@/utils/validationShema';
import { inputItems } from '@/constants/constants';
import RadioButtonsGroup from './RadioButtonsGroup';
import { radioStyle } from '@/constants/constants';
import styles from './FormBlock.module.scss';
import MessageInput from './MessageInput';
import Image from 'next/image';

function FormBlock() {
  const handleSubmit = (values: UserInterface) => {
    alert('You submited your data');
  };

  const renderErrorMessage = (name: string, touched: any, errors: any) => {
    if (touched[name] && errors[name]) {
      return <div className={styles.warning}>{errors[name]}</div>;
    }
    return null;
  };
  return (
    <>
      <div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form className={styles.form}>
              {inputItems.map(({ label, name, autoComplete, type }) => {
                return (
                  <div className={styles.form_wrapper} key={name}>
                    <TextField
                      id={name}
                      label={label}
                      type={type}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      sx={{
                        width: '278px',
                        mr: 5,
                        mb: 5.7,
                        color: '#8D8D8D',
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: '20px',
                      }}
                      variant="standard"
                    />

                    {renderErrorMessage(name, touched, errors)}
                  </div>
                );
              })}
              <Typography
                sx={{
                  radioStyle,
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Select Subject?
              </Typography>
              <RadioButtonsGroup />
              <MessageInput />
              <button type="submit" className={styles.submit}>
                Send Message
              </button>
              <Image
                src="/letter_send.png"
                alt="Message_send"
                width={240}
                height={112}
                layout="fixed"
                className={styles.image}
              />
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormBlock;
