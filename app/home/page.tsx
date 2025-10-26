import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1.5rem",
        background: "#000000ff",
      }}
    >
      {/* Centered massive header */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          color: "#ffffffff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 800,
            lineHeight: 1.02,
            fontSize: "4rem",
          }}
        >
          Get Help With What You Need!
        </h1>
      </main>

      {/* Bottom center single link to chat */}
      <footer
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Link
          aria-label="Open Chat"
          href="/"
          style={{
            display: "inline-block",
            padding: "1rem 3rem",
            minWidth: 260,
            textAlign: "center",
            background: "#ffffffff",
            color: "#000000ff",
            borderRadius: 12,
            boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: 18,
          }}
        >
          Open Chat
        </Link>
      </footer>
    </div>
  );
}
