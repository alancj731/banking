import axios from 'axios';
import { BACKEND_URL } from 'src/constants';

export async function getUser(token: string) {
  try {
    const response = await axios.get(BACKEND_URL + 'users/verify/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
}
