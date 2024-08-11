import axios from 'axios';

// to do: hard coded here, modify later
const URL = 'http://localhost:3000/users/';

export const SignUp = async (formData: any) => {
  const { email, firstName, lastName } = formData;

  if (!email || !firstName || !lastName) {
    console.log('Missing required fields');
    return false;
  }

  try {
    const response = await axios.post(URL+'signup', {
      email,
      firstName,
      lastName,
    });
    console.log('response:', response);
  } catch (error) {
    console.log('Error:', error);
    return false;
  }

  return true;
};

export const SignIn = async (formData: any) => {
  const { email, password } = formData;

  if (!email || !password) {
    console.log('Missing mail or password');
    return false;
  }

  try {
    const response = await axios.post(URL+'signin', {
      email,
      password
    });
    console.log('response:', response);
  } catch (error) {
    console.log('Error:', error);
    return false;
  }

  return true;
};
