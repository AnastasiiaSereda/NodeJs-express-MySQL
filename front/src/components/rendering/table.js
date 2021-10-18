import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeValue } from "../../redux/actions/action";
import Update from "./update";
import "./table.css";

const TableOfValues = () => {
  const values = useSelector((state) => state.values.items);

  const [update, setUpdate] = useState(false);
  const [valueItems, setValueItems] = useState([]);
  const dispatch = useDispatch();

  const removeItem = useCallback((id) => {
    dispatch(removeValue(id));
  }, []);

  const deleteItem = (id) => {
    removeItem(id);
  };

  const updateItem = () => {
    setUpdate(true);
  };

  useEffect(() => {
    setValueItems(values);
  }, [values]);


  const valueList = valueItems.map(({ id, title, wavelength, frequency }) => {
  
    if (values.length === 0) {
      return <div>No values in the table</div>;
    }
    return (
      <ul className="items" key={"key-" + id}>
        <li className="title">{title}</li>{" "}
        <li className="wavelength"> {wavelength}</li>
        <li className="frequency"> {frequency}</li>
        <p>
          {update ? (
            <Update title={title} wavelength={wavelength} frequency={frequency}
            id={id} setUpdate={setUpdate} />
          ) : (
            <>
              <button className="remove-btn" onClick={() => deleteItem(id)}>
                X
              </button>
              <button className="update-btn" onClick={updateItem}>
                update
              </button>
              </>
          )}
        </p>
      </ul>
    );
  });

  return <div className="todo-list">{valueList}</div>;
};

export default TableOfValues;
