// import { useNavigate } from "react-router-dom";

// export default function Page2() {
//   const navigate = useNavigate();

//   return (
//     <div className="page">
//       <div style={{ textAlign: "center" }}>
//         <h2>"You are my favorite notification ❤️"</h2>

//         <img
//           src="/images/photo1.jpg"
//           style={{ width: "250px", borderRadius: "20px" }}
//         />

//         <br /><br />

//         <button className="bubble-btn" onClick={() => navigate("/page3")}>
//           Continue
//         </button>
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";
import { useState, useRef } from "react";


export default function Page2() {
  const navigate = useNavigate();
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
  if (!audioRef.current) return;

  if (!isPlaying) {
    audioRef.current.currentTime = 0; // ✅ always start from beginning on first play
    audioRef.current.play().catch(() => {});
    setIsPlaying(true);
  } else {
    audioRef.current.pause();
    setIsPlaying(false);
  }
};
  return (
    <div className="page" onClick={toggleMusic}>
              <FloatingHearts />
        
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bubble"
        style={{ textAlign: "center" }}
      >
        <h2>"You are my 7 minutes❤️"</h2>

        <img
          src="/images/ga.jpeg"
          style={{ width: "250px", borderRadius: "20px" }}
        />

        <br /><br />

        <button className="bubble-btn" onClick={() => navigate("/page3")}>
          Continue 💕
        </button>
      </motion.div>

         
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      fontSize: "14px"
    }}
  >
    {isPlaying ? "Tap to pause music ⏸️" : "New Song here! Tap anywhere to start music 🎵"}
  </div>

      <audio ref={audioRef} loop>
  <source src="/audio/baby.mp3" type="audio/mp3" />
</audio>

    </div>
  );
}