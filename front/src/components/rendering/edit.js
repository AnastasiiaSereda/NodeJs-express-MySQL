import { useState } from "react";


const Edit = ({ value, id, setEdit }) => {
  const [editValue, setEditValue] = useState(value);
 


  const saveItem = () => {
    setEdit(false);
  };

  
  return (
    <div>
      <input
        type="text"
        value={editValue}
        onChange={(e) => {
          setEditValue(e.target.value);
        }}
      />
      <button className="edit-btn" onClick={saveItem}>
        save
      </button>
    </div>
  );
};
export default Edit;