// import { useNavigate } from "react-router-dom";

// export default function Page3() {
//   const navigate = useNavigate();

//   return (
//     <div className="page">
//       <div style={{ textAlign: "center" }}>
//         <h1>Happy Birthday ❤️</h1>

//         <div style={{ display: "flex", overflowX: "auto" }}>
//           <img src="/images/1.jpg" width="200" />
//           <img src="/images/2.jpg" width="200" />
//           <img src="/images/3.jpg" width="200" />
//         </div>

//         <br />

//         <button className="bubble-btn" onClick={() => navigate("/page4")}>
//           🎁 Open Gift
//         </button>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Page3() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 0.9, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center" }}
      >
        <h1>Happy Birthday 💖</h1>

        {/* Bubble Video */}
        <div className="video-bubble">
          <video controls autoPlay loop>
            <source src="/video/final.mp4" type="video/mp4" />
          </video>
        </div>

        <br />

        {/* Gift Button */}
        <button
          className="bubble-btn"
          onClick={() => navigate("/page4")}
        >
          By clicking this , you would get to know my fillings 🤭🤭
        </button>
      </motion.div>
    </div>
  );
}   