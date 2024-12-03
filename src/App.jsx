import { Joystick } from "react-joystick-component";

function App() {
  return (
    <>
      <div>
        <h1 className="text-red-500">Hello world!</h1>
        <img src="./images/map.jpg" alt="" />
        <Joystick size={100} sticky={true}></Joystick>
      </div>
    </>
  );
}

export default App;
