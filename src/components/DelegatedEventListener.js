export const DelegatedEventListener = () => {
  // get the component by tag
  const component = document.getElementsByTagName("div")[0];

  //This is common event listener for this component
  component.addEventListener("click", (e) => {
    console.log(e.target.id)
    if (e.target.id === "test_1") {
      alert("test 1 operation fires");
    } else if (e.target.id === "test_2") {
      alert("test 2 operation fires");
    } else if (e.target.id === "test_3") {
      alert("test 3 operation fires");
    }
  });

  return (
    <div id="component_1">
      <div className="Row">
        <button id="test_1">test 1</button>
        <button id="test_2">test 2</button>
        <button id="test_3">test 3</button>
      </div>
    </div>
  );
};
