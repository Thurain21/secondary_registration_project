import React, { useContext } from 'react'
import SampleContextTwo from '../context/SampleContextTwo';

function ChildTwo() {

    const receivedData = useContext(SampleContextTwo);
  return (
    <div><h2>
        ChildTwo
    </h2>
    <h3>{receivedData}</h3>
    </div>
  )
}

export default ChildTwo