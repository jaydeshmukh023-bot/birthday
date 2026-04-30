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

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div className="page">
              <FloatingHearts />
        
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bubble"
        style={{ textAlign: "center" }}
      >
        <h2>"You are my favorite notification ❤️"</h2>

        <img
          src="/images/ga.jpeg"
          style={{ width: "250px", borderRadius: "20px" }}
        />

        <br /><br />

        <button className="bubble-btn" onClick={() => navigate("/page3")}>
          Continue 💕
        </button>
      </motion.div>
    </div>
  );
}