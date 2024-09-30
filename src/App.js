// eslint-disable-next-line
import "./App.css";
import UseRef_Form from "./components/UseRef_Form";
import UseState_Form from "./components/UseState_Form";
function App() {
  return (
    <>
      <div className="App">
        
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <UseState_Form />
      </div>
      <div>
        {/* eslint-disable-next-line react/jsx-pascal-case */}
        <UseRef_Form />
      </div>
    </>
  );
}
export default App;
