import { CREATE_VALUE,  REMOVE_VALUE, SAVE_UPDATE, LOAD_DATA} from "./actionType";
import ApiServer from "../../requestToServer/serverApi";
import axios from "axios";

export function createValue(title, wavelength, frequency, data) {
  return { 
    type: CREATE_VALUE,
    title,
    wavelength,
    frequency,
    data,
  };
}
export function removeValue(id) {
  return {
    type: REMOVE_VALUE,
    id,
  };
}


export const saveUpdate = (title, wavelength, frequency, id) => {
    return {
      type: SAVE_UPDATE,
      title,
      wavelength,
      frequency,
      id,
    };
  };

  export const loadDataAction = (data) => {
    return { type: LOAD_DATA, data };
  };

  
  export const thunkLoadData = () => {
    return (dispatch) => {
      axios.get("http://localhost:3000/api/value").then((data) => {
        dispatch(loadDataAction(data));
      });
    };
  };

export const thunkDeleteValue = (id) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3000/api/value/delete/${id}`);
    dispatch(thunkLoadData());
  };
};


export const thunkObjForData = (title, wavelength, frequency) => {
  return async (dispatch) => {
    try {
      const response = await ApiServer.addValue(title, wavelength, frequency);
      dispatch(createValue(title, wavelength, frequency, response.data));
    } catch {
      console.log("error");
    }
  };
};
