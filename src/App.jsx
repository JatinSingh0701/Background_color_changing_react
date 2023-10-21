import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shodow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => {
                setColor("red");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("Green");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("olive");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
              onClick={() => {
                setColor("Gray");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "yellow" }}
            >
              yellow
            </button>
            <button
              onClick={() => {
                setColor("Pink");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "Pink" }}
            >
              Pink
            </button>
            <button
              onClick={() => {
                setColor("purple");
              }}
              className="outline-none px-4 rounded-full text-white shadow-lg "
              style={{ backgroundColor: "purple" }}
            >
              purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
