import React from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';

const Home = function ({meters, setData}) {

  var getData = function ( event, id) {
    console.log('test1')
    axios.get(`/meters/METER_ID/?id=${id}`)
    .then ( (response)=> {
      console.log(response.data);
      setData(response.data);

    })
    .catch( (err) => {
      alert(err);
    })
  }

  return (
 <div>
   <h1>Meters Name</h1>
  {meters.length > 0 ? meters.map((meter, index)=>(<div> <Link to='/infor' id={index} onClick={(event)=>{getData(event, meter.id)}}>meter name: {meter.label}</Link></div>)):null}
  </div>
  )
}

export default Home;
