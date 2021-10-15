import React from "react";
// import Edit from "./edit";
import "./table.css";

const TableOfValues = ({ arrayList, removeItem }) => {
  // const [edit, setEdit] = useState(false);
  console.log("arrayList", arrayList);
  if (arrayList.length === 0) {
    return <div>No values in the table</div>;
  }
  // const editItem = () => {
  //   setEdit(true);
  // };

  const valueList = arrayList.map(({ id, title, wavelength, frequency }) => {
    return (
      <ul className="items" key={"key-" + id}>
        <li className="title">{title}</li>{" "}
        <li className="wavelength"> {wavelength}</li>
        <li className="frequency"> {frequency}</li>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          X
        </button>
        {/* <button className="edit-btn" onClick={editItem}>
          edit
        </button> */}
      </ul>
    );
  });

  return <div className="todo-list">{valueList}</div>;
};
export default TableOfValues;
