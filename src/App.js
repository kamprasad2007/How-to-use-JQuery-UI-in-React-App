import JQueryComponent from "./jqueryComponent";

function App() {

  const activateHandler = (text) => {
    console.log(`activate ${text} !`)
  }

  return (
    <>
      <h2>How to use JQuery UI in React App</h2>
      <div className="App">
        <JQueryComponent onActivate={activateHandler}></JQueryComponent>
      </div>
    </>
  );
}

export default App;
