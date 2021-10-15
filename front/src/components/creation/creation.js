import React, { useState } from "react";
import "./creation.css";

const CreateNewValue = ({ addItem }) => {
  const [title, setTitle] = useState("");
  const [wavelength, setWavelength] = useState("");
  const [frequency, setFrequency] = useState("");

  const changedForTitle = (event) => {
    setTitle(event.target.value);
  };
  const changedForWavelength = (event) => {
    setWavelength(event.target.value);
  };
  const changedForFrequency = (event) => {
    setFrequency(event.target.value);
  }; 


  return (
    <div className="block">
      <div className="form-group">
        <label className="title">Title</label>
        <input
          type="text"
          className="form-control"
          onChange={changedForTitle}
          value={title}
        />
      </div>
      <div className="form-group">
        <label className="wavelength">Wavelength</label>
        <input
          type="number"
          className="form-control"
          onChange={changedForWavelength}
          value={wavelength}
        />
      </div>
      <div className="form-group">
        <label className="frequency">Frequency</label>
        <input
          type="number"
          className="form-control"
          onChange={changedForFrequency}
          value={frequency}
        />
      </div>
      <button
        className="btn-dark"
        onClick={() => {
          addItem({ title, wavelength, frequency});
        }}
      >
        Add value
      </button>
    </div>
  );
};

export default CreateNewValue;