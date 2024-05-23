import axios from "axios";

const REST_API_BASE_URL = 'https://successful-magic-production.up.railway.app/';

export const createPerson= person => axios.post(REST_API_BASE_URL, person);

