import Child from "./Child";
// import Parent from "./functionalComponents/Parent";
import Parent from "./classComponents/Parent";

function App() {
  return (
    <>
      <h1>Hello</h1>
      {/* {Child()} */}
      {/* <Child/> */}
      {/* {new Parent().render()} */}
      {/* <Parent/> */}
      {/* {Parent()} */}
      <Parent/>
      
    </>
  ); 
}

export default App