import axios from 'axios' 
const url = "http://localhost:3001/api/value"

export const getApi = async () => {
    return await axios.get(url)
}
export const create = async (objData) => {
    return await axios.post(`${url}/create`, objData)
}

export const remove = async () => {
    return await axios.delete(`${url}/delete`)
}

export const update = async () => {
    return await axios.patch(`${url}/patch`)
}