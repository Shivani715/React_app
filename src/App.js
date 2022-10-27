import flower1 from "./IMAGES/flower1.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(1);

  return (
    <div className="App">
      <div className="thumbnailwrapper">
        <div className="thumbnail" onClick={() => setImage(1)}>
          1
        </div>
        <div className="thumbnail" onClick={() => setImage(2)}>
          2
        </div>
        <div className="thumbnail" onClick={() => setImage(3)}>
          3
        </div>
        <div className="thumbnail" onClick={() => setImage(4)}>
          4
        </div>
      </div>
      <img src={flower1} width={500} />
    </div>
  );
}

export default App;
