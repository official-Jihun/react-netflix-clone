import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key : "5df993e9386ed418b840e547a059f436",
        language: "ko-KR",

    },
});

export default instance;