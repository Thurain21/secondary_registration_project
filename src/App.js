// eslint-disable-next-line
import "./App.css";
import ChildTwo from "./components/ChildTwo";
import UseRef_Form from "./components/UseRef_Form";
import UseState_Form from "./components/UseState_Form";
import SampleContextTwo from "./context/SampleContextTwo";
function App() {
  const data = 'This is data form root.';
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
      <div>
        <SampleContextTwo.Provider value={data}>
          <ChildTwo/>
        </SampleContextTwo.Provider>
      </div>
    </>
  );
}
export default App;
