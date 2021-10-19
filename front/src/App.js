import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';
// import {useRoutes} from './routes'
// import { TablePage } from './pages/TablePage';
import MainBlockInput from "./components/main-page/main-page";
import TableOfValues from "./components/rendering/table"
import 'materialize-css';



function App() {
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


