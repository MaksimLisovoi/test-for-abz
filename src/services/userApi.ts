import axios from 'axios';
import * as errorCatcher from './helperFuncs';

let baseUrl = `https://frontend-test-assignment-api.abz.agency`;

export async function getUsersList(page: number, offset: number) {
  try {
    const allUsers = await axios.get(`${baseUrl}/api/v1/users?page=${page}&count=${offset}`);
    return allUsers.data;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}
