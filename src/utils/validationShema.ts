import * as Yup from 'yup';

export const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('First Name is required')
    .min(4, 'First Name should have at least 4 characters'),
  lastName: Yup.string()
    .required('Last Name is required')
    .min(4, 'Last Name  should have at least 4 characters'),
  email: Yup.string().required('Email is required').email('Enter valid email'),
  phone: Yup.string().required('Phone number is required'),
  message: Yup.string().required('Message is required'),
});
