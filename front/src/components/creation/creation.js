import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkObjForData } from "./../../redux/actions/action";
import "./creation.css";

const CreateNewValue = () => {
  const [title, setTitle] = useState("");
  const [wavelength, setWavelength] = useState("");
  const [frequency, setFrequency] = useState("");


  const values = useSelector((state) => state.values.items);
  const dispatch = useDispatch();

  const actionForTitle = (event) => {
    setTitle(event.target.value);
  };
  const actionForWavelength = (event) => {
    setWavelength(event.target.value);
  };
  const actionForFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const handler = (infoForTitle, infoForWavelength, infoForFrequency) => {
    dispatch(thunkObjForData(infoForTitle,infoForWavelength,infoForFrequency ));
  };

  const sendDataToRedux = () => {
    handler(title, wavelength, frequency, values);
  };


  return (
    <div className="block">
      <div className="form-group">
        <label className="title">Title</label>
        <input
          type="text"
          className="form-control"
          onChange={actionForTitle}
          value={title}
        />
      </div>
      <div className="form-group">
        <label className="wavelength">Wavelength</label>
        <input
          type="number"
          className="form-control"
          onChange={actionForWavelength}
          value={wavelength}
        />
      </div>
      <div className="form-group">
        <label className="frequency">Frequency</label>
        <input
          type="number"
          className="form-control"
          onChange={actionForFrequency}
          value={frequency}
        />
      </div>
      <button
        className="btn-dark"
        onClick={() => sendDataToRedux()}>
        Add value
      </button>
    </div>
  );
};

export default CreateNewValue;