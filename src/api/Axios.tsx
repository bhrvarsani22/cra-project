import axios from "axios";
import config from "../Config";

//* Base url for API *//

const AxiosAPI = axios.create({
    baseURL: `${config.REACT_APP_SERVER_URL}`
});

export default AxiosAPI;