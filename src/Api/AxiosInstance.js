import axios from "axios";
import { baseURL } from './EndPoints'
export const axiosInstance = axios.create({ baseURL })