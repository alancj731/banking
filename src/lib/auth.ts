import axios from 'axios';

// to do: hard coded here, modify later
const URL = 'http://localhost:3000/users/';

export const SignUp = async (formData: any) => {
  const { email, password, firstName, lastName } = formData;

  console.log('sign up:', email, password, firstName, lastName);

  if (!email || !password || !firstName || !lastName) {
    console.log('Missing required fields');
    return null;
  }

  try {
    const response = await axios.post(URL + 'signup', {
      name: firstName + ' ' + lastName,
      email,
      password,
    });
    console.log('response:', response);

    // response.data is userId
    return response.data;
  
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
    const response = await axios.post(URL + 'signin', {
      email,
      password,
    });
    return response;

  } catch (error) {
    
    console.log('Error:', error);
    return null;
  }
};
