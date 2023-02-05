import axios from "axios";

// Next we make an 'instance' of it
const instance = axios.create();

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
