import axios from "axios";
const url = "http://localhost:3001/api/value";

export const getApi = async () => {
  return await axios.get(url);
};
export const createValueInApi = async ({ title, wavelength, frequency }) => {
  return await axios.post(`${url}/create`, { title, wavelength, frequency });
};

export const deleteValueFromApi = async (id) => {
  return await axios.delete(`${url}/delete/${id}`);
};

// router.get("/value", getTable);
// router.post("/value/create", createItem);
// router.delete("/value/delete", deleteItem);
// router.patch("/value/update", updateItem);

export const updateValueInApi = async (id, obj) => {
  return await axios.patch(`${url}/update/${id}`, obj);
};

// endpoints.patch  = ({id}, toPatch, config={}) => axios.patch(`${resourceURL}/${id}`, toPatch, config)
// endpoints.delete = ({ id }, config={}) => axios.delete(`${resourceURL}/${id}`, config)
// endpoints.create = (toCreate, config={}) =>  axios.post(resourceURL, toCreate, config)
