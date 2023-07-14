import axios from 'axios';
import * as errorCatcher from './helperFuncs';
import { createNewUserType } from '../types';

let baseUrl = `https://frontend-test-assignment-api.abz.agency/api/v1`;

export async function getUsersList(page: number, offset: number) {
  try {
    const allUsers = await axios.get(`${baseUrl}/users?page=${page}&count=${offset}`);
    return allUsers.data;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}

export async function createNewUser(data: createNewUserType) {
  try {
    const { data } = await axios.get(`${baseUrl}/positions`);
    return data.positions;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}

export async function getPositions() {
  try {
    const { data } = await axios.get(`${baseUrl}/positions`);
    return data.positions;
  } catch (error) {
    errorCatcher.reportError({ message: errorCatcher.getErrorMessage(error) });
  }
}
