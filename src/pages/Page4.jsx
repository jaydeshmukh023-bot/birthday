import { useState, useEffect } from "react";

export default function Page4() {
  const text = `
  Happy Birthday ❤️

I don’t think this day is “just another day” anymore… because the day you came into my life, everything quietly changed.

You don’t even realize it, but you made my normal days feel special. Your smile, your way of talking, your little expressions — they stay with me even when we’re not talking. There’s something very calm and safe about you, and I honestly didn’t know I needed that until I met you.

I still remember seeing you for the first time… and even now, nothing has changed. You still feel just as magical to me. Your eyes, your smile… they don’t just look beautiful, they make me feel something I can’t really explain.

Talking to you became a part of my day without me even noticing. And now, it’s something I look forward to. You make things lighter, easier, better… just by being you.

I know life isn’t always easy, and you’ve had your own moments… but I just want you to know this — I’m always here for you. No pressure, no expectations. Just someone who truly cares about you and wants to see you happy.

On your birthday, I don’t wish for anything big… I just wish that you keep smiling the same way, because that smile means more than you think.

And selfishly… I hope I get to be around, to see more of that smile, more of you.

You’re special. In a very real, simple way.

Happy Birthday, my Lotus 🌸
I’m really glad I found you.

— Yours and only yours tulip 🌷


`;

  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplay((prev) => prev + text.charAt(i)); 
      i++;

      if (i >= text.length) {
        clearInterval(interval);
      }
    }, 20); // slightly faster = smoother

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page scroll-page">
      <div className="bubble letter-box">
        <h2>My Dear Lotus ❤️</h2>
        <p>{display}<span className="cursor">🫰</span></p> {/* ✅ typing effect works */}
      </div>
    </div>
  );
}