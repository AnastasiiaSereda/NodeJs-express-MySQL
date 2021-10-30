import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { removeValue } from "../../redux/actions/action";
// import { deleteValue, updateValue } from "./table"
import { deleteValueFromApi } from "../../api/CrudApi";
import Update from "./update";

export const ValueList = ({
  data: { id, title, wavelength, frequency },
  setData,
}) => {
  const [update, setUpdate] = useState(false);
  // const dispatch = useDispatch();

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
    try {
      await deleteValueFromApi(id);
      setData((prevState) => {
        return prevState.filter((item) => item.ID !== id);
      });
    } catch (error) {
      alert("error");
    }
  };

  return (
    <div>
      <ul className="items">
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
    </div>
  );
};
