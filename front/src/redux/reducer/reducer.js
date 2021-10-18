import {
  CREATE_VALUE,
  REMOVE_VALUE,
  SAVE_UPDATE,
  LOAD_DATA,
} from "../actions/actionType";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  values: {
    items: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_DATA: {
      console.log(action.data);
      return {
        ...state,
        arr: action.data.data,
      };
    }
    case CREATE_VALUE:
      console.log(action.data.json);
      const postData = {
        id: uuidv4(),
        title: action.title,
        wavelength: action.wavelength,
        frequency: action.frequency,
      };
      return {
        ...state.values,
        values: {
          items: [postData, ...state.values.items],
        },
      };

    case REMOVE_VALUE:
      let filteredArray = state.values.items.filter(
        ({ id }) => id !== action.id
      );
      return {
        values: {
          ...state.values,
          items: filteredArray,
        },
      };


    case SAVE_UPDATE: {
      const { id, title, wavelength, frequency } = action;
      const updatedArr = state.arr.map((el) => {
        if (el.id === id) {
          return { ...el, title, wavelength, frequency };
        }
        return el;
      });
      return {
        ...state,
        arr: updatedArr,
      };
    }

    default:
      return state;
  }
}
