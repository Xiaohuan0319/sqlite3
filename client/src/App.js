import axios from 'axios';
import React from 'react';
import {  Routes, Route }  from 'react-router-dom';
import Details from './Details.js';
import Home from './Home.js';

function App() {

  const [meters, setMeters]=React.useState([]);
  const [data, setData]= React.useState([]);

  React.useEffect ( ()=> {
    axios.get('/meters')
    .then ((response)=> {
      console.log('test');
      setMeters(response.data);
    })
    .catch( (err)=> {
      alert(err);
    })
  }, []);




  return (
    <div>
      <Routes>
          <Route  path="/" element={<Home meters={meters} setData={setData}/>} />
          <Route path="/infor" element = {<Details data={data}  />} />
      </Routes>
    </div>
  );
}

export default App;
