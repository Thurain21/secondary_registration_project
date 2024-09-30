import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';

function SampleChild() {
    const receivedData = useContext(ThemeContext);
  return (
    <div>
        <h1>This is Sample Child.</h1>
        <h2>{receivedData}</h2>
        
    </div>
  )
}

export default SampleChild;