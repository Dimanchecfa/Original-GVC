import axios from "axios";
import { API_URL ,} from "../utilities/constants";

export const HTTP_CLIENT = axios.create({
    baseURL: API_URL,
    timeout: 10000,
});
export const handlingErrors = (error) => {
    if (error.response) {
        const dataResponse = error.response.data;
        const message = dataResponse?.error;
        if (dataResponse) {
            const errors = dataResponse?.error;
            return errors;
        }
        return message;
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        // console.log(error.request);
    }
    return error?.message ?? "Oops !! Léger souci.";
};

