import Flower1 from "./IMAGES/flower1.png";
import Flower2 from "./IMAGES/Flower2.png";
import Flower3 from "./IMAGES/Flower3.png";
import Flower4 from "./IMAGES/flower4.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [image, setImage] = useState(Flower1);
  fetch("https://random-d.uk/api/v2/random", { mode: "no-cors" }).then(
    (response) => {
      console.log(response.body);
    }
  );
  return (
    <div className="App">
      <div className="thumbnailwrapper">
        <div className="thumbnail" onClick={() => setImage(Flower1)}>
          <img src={Flower1} width={100} />
        </div>
        <div className="thumbnail" onClick={() => setImage(Flower2)}>
          <img src={Flower2} width={100} />
        </div>
        <div className="thumbnail" onClick={() => setImage(Flower3)}>
          <img src={Flower3} width={100} />
        </div>
        <div className="thumbnail" onClick={() => setImage(Flower4)}>
          <img src={Flower4} width={100} />
        </div>
      </div>
      <img src={image} width={500} />
    </div>
  );
}

export default App;
