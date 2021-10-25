import { useState } from "react";
import { useDispatch } from "react-redux";
// import { removeValue } from "../../redux/actions/action";
// import { deleteValue, updateValue } from "./table"
import { deleteValueFromApi, updateValueInApi } from "../../api/CrudApi";
import Update from "./update";

export const ValueList = ({
  data: { id, title, wavelength, frequency },
  setData,
}) => {
  const dispatch = useDispatch();
  const [update, setUpdate] = useState(false);

  // const removeItem = (id) => {
  //   dispatch(removeValue(id));
  // };

  // const deleteItem = (id) => {
  //   removeItem(id);
  // };

  const updateItem = () => {
    setUpdate(true);
  };
  const deleteValue = async (id) => {
    await deleteValueFromApi();
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  return (
    <p>
      <ul className="items" key={id}>
        <li className="title">{title}</li>{" "}
        <li className="wavelength"> {wavelength}</li>
        <li className="frequency"> {frequency}</li>
      </ul>

      {update ? (
        <Update
          id={id}
          title={title}
          wavelength={wavelength}
          frequency={frequency}
          setUpdate={setUpdate}
          setData={setData}
        />
      ) : (
        <>
          <button className="remove-btn" onClick={() => deleteValue(id)}>
            X
          </button>
          <button className="update-btn" onClick={updateItem}>
            update
          </button>
        </>
      )}
    </p>
  );
};
