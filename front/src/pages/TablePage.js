import React, { useState } from "react";
import { useHttp } from "../hooks/http.hook";


export const TablePage = () => {
    const {loading, request} = useHttp()

    const [form, setForm] = useState({newWave:'', oldWave:''})

    const changeHandler =  event => {
        setForm({...form, [event.target.name]:event.target.value})
    }


    const createWaveHandler = async ()=>{
        try{
            const data = await request('/value/create', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }
    
    const updateWaveHandler = async ()=>{
        try{
            const data = await request('/value/update', 'PATCH', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

  return (
    <div className="row">
        <h1>Measurements</h1>
        <ul class="collection">
          <li className="collection-item">First wave</li>
          <li className="collection-item">Second wave</li>
          <li className="collection-item">Third wave</li>
        </ul>

        <div>
            <div class="input-field">
            <input placeholder="Enter name of new wave" id="newWave" type="text" name="newWave" className="input" onChange={changeHandler}/>
             <label for="first_name"></label>
             </div>
             <div class="input-field">
            <input placeholder="Update this wave" id="oldWave" type="text" name="oldWave" className="input" onChange={changeHandler}/>
             <label for="first_name"></label>
             </div>

        </div>
        <div className="collection-action">
            <button className="btn blue darken-1" onClick={createWaveHandler} disabled={loading}>Add wave</button>
            <button className="btn"disabled={loading}>Delete wave</button>
            <button className="btn" onClick={updateWaveHandler} disabled={loading}>Update wave</button>
        </div>
      </div>
  );
};
