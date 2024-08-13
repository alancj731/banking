import axios from 'axios';
import { BACKEND_URL } from 'src/constants';

// to do: hard coded here, modify later
const USER_URL = BACKEND_URL + 'users/';

export const SignUp = async (formData: any) => {
  const { email, password, firstName, lastName } = formData;

  console.log('sign up:', email, password, firstName, lastName);

  if (!email || !password || !firstName || !lastName) {
    console.log('Missing required fields');
    return null;
  }

  try {
    const response = await axios.post(USER_URL + 'signup', {
      name: firstName + ' ' + lastName,
      email,
      password,
    });

    // response.data is the user object
    return response;
  } catch (error) {
    console.log('Error:', error);

    return null;
  }
};

export const SignIn = async (formData: any) => {
  const { email, password } = formData;

  if (!email || !password) {
    console.log('Missing mail or password');
    return null;
  }

  try {
    const response = await axios.post(USER_URL + 'signin', {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};
