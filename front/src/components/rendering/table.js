import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import { getApi } from "../../api/CrudApi";

import "./table.css";
import { ValueList } from "./valueList";

const TableOfValues = ({ data, setData }) => {
  // const values = useSelector((state) => state.values.items);
  // const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      let response = await getApi();
      setData(response.data.dataTable);
    };
    getData();
  }, []);

  // const createValue = async () => {
  //   let response = await createValueInApi();
  //   setData(response.data.dataTable);
  // };

  if (!data) return <p>error</p>;

  const valueList = data.map(({ ID, Title, Wavelength, Frequency }) => (
    <ValueList
      key={ID}
      data={{
        id: ID,
        title: Title,
        wavelength: Wavelength,
        frequency: Frequency,
      }}
      setData={setData}
    />
  ));

  return <div className="todo-list">{valueList}</div>;
};

export default TableOfValues;
