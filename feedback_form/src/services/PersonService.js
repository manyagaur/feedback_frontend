import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/person';

export const createPerson= person => axios.post(REST_API_BASE_URL, person);

