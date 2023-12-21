import axios from "axios";

const usePublic = axios.create({
    baseURL:'http://localhost:5000/'
})
const useAxios = () => {
    return  usePublic;
};

export default useAxios;