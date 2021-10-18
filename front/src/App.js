import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
// import {useRoutes} from './routes'
// import { TablePage } from './pages/TablePage';
import MainBlockInput from "./components/main-page/main-page";
import TableOfValues from "./components/rendering/table"
import 'materialize-css';



function App() {
  // const [data, setData] = useState(null)
  // const [arrayList, setArrayList] = useState([]);
  // const removeItem = (id) => {
  //   console.log(id);
  //   setArrayList((beforeArray) => beforeArray.filter((el) => el.id !== id));
  // };
  // const addItem = ({ title, wavelength, frequency }) => {
  //   setArrayList((beforeArray) => [
  //     { id: new Date().getMilliseconds(), title, wavelength, frequency  },
  //     ...beforeArray,
  //   ]);
  // };

  //  useEffect(() =>{
  //  fetch('/api')
  //  .then(response => response.json())
  //  .then(response => setData(response.dataTable))
  // },[])


  return (
    <div className="App">
      <div className="center">
        <MainBlockInput/>
        <TableOfValues/>
        {/* <p>{!data ? "Loading..." : data}</p> */}
      </div>
    </div>
  );
}

export default App;


