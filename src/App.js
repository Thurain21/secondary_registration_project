
import './App.css';
import ThemeContext from './context/ThemeContext';
import Child from './components/Child';

function App() {
  const data = "This is message from Root!";
  return (
    <div className="App">
      <ThemeContext.Provider value = {data}>
        <Child/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
