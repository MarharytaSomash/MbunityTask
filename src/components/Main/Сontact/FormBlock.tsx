'use client';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { validationSchema } from '@/utils/validationShema';

function FormBlock() {
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field name="firstName" />

              {touched.firstName && errors.firstName && <div>{errors.firstName}</div>}
              <Field name="email" />

              {touched.email && errors.email && <div>{errors.email}</div>}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormBlock;
