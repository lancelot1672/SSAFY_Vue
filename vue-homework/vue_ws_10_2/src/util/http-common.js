import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:9999/userapi",
    headers:{
        "Content-Type" : "Application/json",
    }
});