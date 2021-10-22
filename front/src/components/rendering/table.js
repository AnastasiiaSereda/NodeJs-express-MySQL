import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getApi } from "../../api/CrudApi";
import "./table.css";
import { ValueList } from "./valueList";

const TableOfValues = () => {
  const values = useSelector((state) => state.values.items);
  const [data, setData] = useState(null);

  // console.log(get.then);
  useEffect(() => {
    const getData = async () => {
      let response = await getApi();
      setData(response.data.dataTable);
    };
    getData();
  }, []);
  // console.log(data);
  if (!data) return <p>error</p>;
  const valueList = data.map(({ ID, Title, Wavelength, Frequency }) => (
    <ValueList
      data={{
        id: ID,
        title: Title,
        wavelength: Wavelength,
        frequency: Frequency,
      }}
    />
  ));

  return <div className="todo-list">{valueList}</div>;
};

export default TableOfValues;
