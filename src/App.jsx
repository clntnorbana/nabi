import { useState } from "react";
import AudioPlayer from "./components/AudioPlayer";
import FirefliesCanvas from "./components/FireFliesCanvas";
import { motion } from "framer-motion";

import butterfly from "./assets/butterfly.png";
import ayeb1 from "./assets/ayeb1.png";
import ayeb2 from "./assets/ayeb2.png";
import ayeb3 from "./assets/ayeb3.png";
import ayeb4 from "./assets/ayeb4.png";
import ayeb5 from "./assets/ayeb5.png";
import ayeb6 from "./assets/ayeb6.png";

function App() {
  const [entered, setEntered] = useState(false);

  function handleEntered() {
    setEntered(true);
  }

  return (
    <div className={`bg bg-img ${entered ? "active" : ""}`}>
      <p className="text-developed-by">developed by something, 2024</p>

      {entered ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          <FirefliesCanvas />
          <div className="img-grp-1">
            <div className="img-container">
              <img className="img" src={ayeb1} />
            </div>
            <div className="img-container">
              <img className="img" src={ayeb2} />
            </div>
            <div className="img-container">
              <img className="img" src={ayeb3} />
            </div>
          </div>

          <div className="img-grp-2">
            <div className="img-container">
              <img className="img" src={ayeb4} />
            </div>
            <div className="img-container">
              <img className="img" src={ayeb5} />
            </div>
            <div className="img-container">
              <img className="img" src={ayeb6} />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1 className="text-paruparo">Paruparo</h1>
            <AudioPlayer />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div onClick={handleEntered} className="block-enter">
            <img src={butterfly} className="butterfly-btn" />
            <p className="text-enter">click the butterfly</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default App;
