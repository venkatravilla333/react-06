import Child from "./Child";
// import Parent from "./functionalComponents/Parent";
import Parent from "./classComponents/Parent";
import Jsx from "./functionalComponents/jsx/Jsx";

function App() {
  return (
    <>
      <h1>App component</h1>
      {/* {Parent()} */}
      {/* {Child()} */}
      {/* <Child/> */}
      {/* {new Parent().render()} */}
      {/* <Parent/> */}
      {/* <Parent/> */}
      <Jsx/>
      
    </>
  ); 
}

export default App