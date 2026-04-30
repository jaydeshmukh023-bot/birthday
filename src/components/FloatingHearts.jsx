export default function FloatingHearts() {
  return (
    <>
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: Math.random() * 100 + "%",
            fontSize: 15 + Math.random() * 20,
            animationDuration: 4 + Math.random() * 6 + "s"
          }}
        >
          💖
        </div>
      ))}
    </>
  );
}