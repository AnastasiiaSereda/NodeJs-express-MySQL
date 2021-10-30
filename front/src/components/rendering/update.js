import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { saveUpdate } from "./../../redux/actions/action";
import { updateValueInApi } from "../../api/CrudApi";

const Update = ({ id, title, wavelength, frequency, setData, setUpdate }) => {
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateWavelength, setUpdateWavelength] = useState(wavelength);
  const [updateFrequency, setUpdateFrequency] = useState(frequency);
  // const dispatch = useDispatch();

  const updateValue = async (id) => {
    const updatedItem = {
      Title: updateTitle,
      Wavelength: updateWavelength,
      Frequency: updateFrequency,
    };

    await updateValueInApi(id, updatedItem);
    setUpdate(false)
    setData((prevState) =>
      prevState.map((el) => {
        if (el.ID === id) {
          return updatedItem;
        }
        return el;
      })
    );
  };

  // const saveItem = () => {
  //   setUpdate(false);
  //   dispatch(saveUpdate(updateTitle,updateWavelength,updateFrequency,id));
  // };

  return (
    <div>
      <input
        type="text"
        value={updateTitle}
        onChange={(e) => {
          setUpdateTitle(e.target.value);
        }}
      />

      <input
        type="number"
        value={updateWavelength}
        onChange={(e) => {
          setUpdateWavelength(e.target.value);
        }}
      />

      <input
        type="number"
        value={updateFrequency}
        onChange={(e) => {
          setUpdateFrequency(e.target.value);
        }}
      />

      <button
        className="update-btn"
        onClick={() => {
          updateValue(id);
        }}
      >
        save
      </button>
    </div>
  );
};
export default Update;
