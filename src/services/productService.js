import axios from "../axios"


const getAllCate = () => {
    return axios.get('/category');
}


export {
    getAllCate
}