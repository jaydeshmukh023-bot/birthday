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

export default function Page1() {
  const [pin, setPin] = useState("");
  const [wrong, setWrong] = useState(false);
  const navigate = useNavigate();

  const correct = "1111"; // CHANGE THIS

  const handleClick = (num) => {
    if (pin.length < 4) setPin(pin + num);
  };

  const handleYes = () => {
    if (pin === correct) {
      navigate("/page2");
    } else {
      setWrong(true);
    }
  };

  return (
    <div className="page">
      <FloatingHearts />

      {/* Cartoon Characters */}
      
      <img src="/images/11.jpeg" style={{ position: "absolute", right: "8%", top: "10%", width: "200px" }} />
      <img src="/images/19.jpeg" style={{ position: "absolute", left: "5%", top: "20%", width: "350px" }} />
      {/* <img src="/images/14.jpeg" style={{ position: "absolute", right: "40%", top: "50%", width: "160px" }} /> */}
      <img src="/images/baby.jpeg" style={{ position: "absolute", right: "20%", top: "48%", width: "300px" }} />
      <img src="/images/flo.jpeg" style={{ position: "absolute", left: "83%", top: "55%", width: "300px" }} />
      <img src="/images/ro.jpeg" style={{ position: "absolute", left: "26%", top: "70%", width: "220px" }} />

      <div className="bubble" style={{ textAlign: "center" }}>
        <h2>Enter Secret Code 💖</h2>

        {/* display */}
        <div style={{ fontSize: "30px", letterSpacing: "10px" }}>
          {pin.padEnd(4, "_")}
        </div>

        {/* keypad */}
        <div className="keypad">
          {[1,2,3,4,5,6,7,8,9,"",0,"⌫"].map((k, i) => (
            <div
              key={i}
              className="key"   
              onClick={() => {
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
          src="https://media.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"
          style={{ position: "absolute", bottom: "20px", width: "150px" }}
        />
      )}

      {/* music */}
      <audio autoPlay loop>
        <source src="/audio/her1.mp3" type="audio/mp3" />
      </audio>
    </div>
  );
}