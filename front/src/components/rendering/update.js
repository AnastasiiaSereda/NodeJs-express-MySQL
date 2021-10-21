
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveUpdate } from "./../../redux/actions/action";


const Update = ({  id, title, wavelength, frequency, setUpdate }) => {
  const [updateTitle, setUpdateTitle] = useState(title);
  const [updateWavelength, setUpdateWavelength] = useState(wavelength);
  const [updateFrequency, setUpdateFrequency] = useState(frequency);
  const dispatch = useDispatch();
 

  const saveItem = () => {
    setUpdate(false);
    dispatch(saveUpdate(updateTitle,updateWavelength,updateFrequency,id));
  };
 
  
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
      <button className="update-btn" onClick={saveItem}>
        save
      </button>
    </div>
  );
};
export default Update;