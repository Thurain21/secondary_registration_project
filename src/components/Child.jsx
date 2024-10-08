import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext';


function Child() {
    const rootData = useContext(ThemeContext);
  return (
    <div>
        <h1>Child Component</h1>
        <h2>{rootData}</h2>
    </div>
  )
}

export default Child;