export const SimpleEventListener =()=>{

   //This is common event listener for globally
   document.addEventListener("click", (e) => {
        console.log(e.target.id);
      });

      return (
        <div id="component_1" >
          <div className="Row">
            <button id="test_1">test 1</button>
            <button id="test_2">test 2</button>
            <button id="test_3">test 3</button>
          </div>
        </div>
      );
}