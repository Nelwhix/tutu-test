import Axios from "axios";

const axios = Axios.create({
    baseURL: "https://lab.aibox.systems/tutu",
    headers: {
        'X-Timestamp': Math.floor(Date.now() / 1000),
        'X-Channel': "web",
    }
})

export default axios;