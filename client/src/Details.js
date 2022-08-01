import React from 'react';

const Details = function ({data}) {
  return (
    <div>
    {data.length > 0?data.map((infor, index)=>( <div id={index}>date: {infor.timestampM}, values: {infor.valueM}</div>)):null}
    </div>
  )
}

export default Details;