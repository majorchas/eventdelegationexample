import "./App.css";

function App() {
  document.addEventListener("click", (e) => {
    console.log(e.target);
  });
  return (
    <div className="App">
      <div className="Row">
        <button>test 1</button>
        <button>test 2</button>
        <button>test 3</button>
      </div>
    </div>
  );
}

export default App;
