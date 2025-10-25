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
      {/* Top center links */}
      <header
        style={{
          position: "absolute",
          top: 32,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <nav style={{ display: "flex", gap: 16 }}>
          <Link
            aria-label="Customer Information"
            href="/customer information"
            style={{
              display: "inline-block",
              padding: "0.5rem 0.75rem",
              background: "#c505ffff",
              color: "#000000ff",
              borderRadius: 8,
              border: "2px solid rgba(0, 0, 0, 1)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Customer Information
          </Link>
          <Link
            aria-label="Buisness Infromation"
            href="/buisness information"
            style={{
              display: "inline-block",
              padding: "0.5rem 0.75rem",
              background: "#c300ffff",
              color: "#000000ff",
              borderRadius: 8,
              border: "2px solid rgba(0, 0, 0, 1)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.06)",
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Buisness Information
          </Link>
        </nav>
      </header>

      {/* Centered massive header */}
      <main
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          color: "#c401ffff",
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
          href="/chat"
          style={{
            display: "inline-block",
            padding: "0.5rem 1.5rem",
            background: "#c504ffff",
            color: "#000000ff",
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0,0,0,0.08)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Open Chat
        </Link>
      </footer>
    </div>
  );
}
