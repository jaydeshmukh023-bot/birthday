// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import FloatingHearts from "../components/FloatingHearts";

// export default function Page1() {
//   const [input, setInput] = useState("");
//   const navigate = useNavigate();

//   const correctPassword = "1234"; // CHANGE THIS

//   const handleYes = () => {
//     if (input === correctPassword) {
//       navigate("/page2");
//     } else {
//       alert("Wrong password 😤");
//     }
//   };

//   const handleNo = () => {
//     alert("😡 Click YES!");
//   };

//   return (
    
//     <div className="page">
//         {/* <audio autoPlay loop>
//             <source src="/audio/song.mp3" type="audio/mp3" />
//         </audio> */}
//       <FloatingHearts />

//       <div style={{ textAlign: "center" }}>
//         <h2>Enter Password 💖</h2>

//         <input
//           type="password"
//           value={input}
//           maxLength={4}
//           onChange={(e) => setInput(e.target.value)}
//           style={{ fontSize: "20px", textAlign: "center" }}
//         />

//         <div style={{ marginTop: "20px" }}>
//           <button className="bubble-btn" onClick={handleYes}>
//             Yes
//           </button>
//           <button className="bubble-btn" onClick={handleNo}>
//             No
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingHearts from "../components/FloatingHearts";
import {  useRef } from "react";

export default function Page1() {
  const [pin, setPin] = useState("");
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate(); 
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const correct = "1703"; // CHANGE THIS

  const handleClick = (num) => {
      if (audioRef.current) {
    audioRef.current.play().catch(() => {});
  }

    if (pin.length < 4) setPin(pin + num);
  };

  const handleYes = () => {
    if (pin === correct) {
      navigate("/page2");
    } else {
      setWrong(true);
    }
  };

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

      {/* Cartoon Characters */}
      
      <img src="/images/11.jpeg" className="desktop-only" style={{ position: "absolute", right: "5%", top: "12%", width: "200px" }} />
      <img src="/images/19.jpeg" className="desktop-only" style={{ position: "absolute", left: "5%", top: "22%", width: "350px" }} />
      {/* <img src="/images/14.jpeg" style={{ position: "absolute", right: "40%", top: "50%", width: "160px" }} /> */}
      <img src="/images/baby.jpeg" className="desktop-only" style={{ position: "absolute", right: "22%", top: "40%", width: "250px" }} />
      <img src="/images/flo.jpeg" className="desktop-only" style={{ position: "absolute", left: "81%", top: "55%", width: "300px" }} />
      <img src="/images/ro.jpeg" className="desktop-only" style={{ position: "absolute", left: "24%", top: "68%", width: "220px" }} />

      <div className="bubble" style={{ textAlign: "center" }}>
        <h2>Enter Secret Code 💖</h2>

        {/* display */}
        <div style={{ fontSize: "30px", letterSpacing: "10px" }}>
          {pin.padEnd(4, "_")}
        </div>
        <div style={{ fontSize: "14px", letterSpacing: "2px" }}><i>
          Hint : Strawberry shakes are the best! 🍓🥤</i>
        </div>

        {/* keypad */}
        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((k, i) => (
            <div
              key={i}
              className="key"   
              onClick={(e) => {
  e.stopPropagation(); // ✅ prevent triggering page click
  if (k === "⌫") setPin(pin.slice(0, -1));
  else if (k !== "") handleClick(k);
}}
            >
              {k}
            </div>
          ))}
        </div>

        <button className="bubble-btn" onClick={handleYes}>
          YES 💗
        </button>

        <button className="bubble-btn" onClick={() => setWrong(true)}>
          NO 😤
        </button>
      </div>

      {/* Angry reaction */}
      {wrong && (
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXc5dWMxOG90MmllemE1ZGR1NTN4ZHJzZXJiNm5xMG81aW16YTVwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OHRF8LZis06OiPDJby/giphy.gif"
          style={{ position: "absolute", bottom: "10px", width: "100px" }}
        />
      )}

      {!pin && (
  <div
    style={{
      position: "absolute",
      bottom: "20px",
      fontSize: "14px"
    }}
  >
    {isPlaying ? "Tap to pause music ⏸️" : "Tap anywhere to start music 🎵"}
  </div>
)}

      {/* music */}
<audio ref={audioRef} loop>
  <source src="/audio/i_like_me_better.mp3" type="audio/mp3" />
</audio>
    </div>
  );
}