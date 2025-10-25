import Link from "next/link";

export default function ViewBusiness() {
  const businesses = [
    {
      id: "1",
      logo: "https://via.placeholder.com/120x80.png?text=Logo",
      name: "Acme Repair",
      field: "Auto Repair",
      years: 12,
    },
    {
      id: "2",
      logo: "https://via.placeholder.com/120x80.png?text=Logo",
      name: "Bright Plumbing",
      field: "Plumbing",
      years: 8,
    },
    {
      id: "3",
      logo: "https://via.placeholder.com/120x80.png?text=Logo",
      name: "Sparkle Cleaners",
      field: "Cleaning",
      years: 5,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1.5rem",
        background: "#000000ff",
        color: "#c401ffff",
      }}
    >
      {/* Large title at top */}
      <header style={{ width: "100%", textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: "3.25rem", fontWeight: 900 }}>Business name</h1>
      </header>

      {/* Massive "table" in the middle (semantic table with clickable rows) */}
      <main style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          <colgroup>
            <col style={{ width: 160 }} />
            <col />
            <col style={{ width: "18%" }} />
            <col style={{ width: "12%" }} />
            <col style={{ width: "12%" }} />
          </colgroup>
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#c401ffff",
                  fontWeight: 700,
                  borderBottom: "2px solid rgba(196,1,255,0.12)",
                }}
              >
                Logo
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#c401ffff",
                  fontWeight: 700,
                }}
              >
                Name
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#c401ffff",
                  fontWeight: 700,
                }}
              >
                Field
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#c401ffff",
                  fontWeight: 700,
                }}
              >
                Years
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#c401ffff",
                  fontWeight: 700,
                }}
              >
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((b) => (
              <tr
                key={b.id}
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.03)",
                }}
              >
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <Link
                    href={`/businesses/${b.id}/resume`}
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                  >
                    <img
                      alt={`${b.name} logo`}
                      height={80}
                      src={b.logo}
                      style={{ objectFit: "cover", borderRadius: 6 }}
                      width={140}
                    />
                  </Link>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <Link
                    href={`/businesses/${b.id}/resume`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: 700,
                    }}
                  >
                    {b.name}
                  </Link>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <Link
                    href={`/businesses/${b.id}/resume`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {b.field}
                  </Link>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <Link
                    href={`/businesses/${b.id}/resume`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {b.years} yrs
                  </Link>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <Link
                    href={`/businesses/${b.id}/resume`}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    {/* placeholder for notes */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
            background: "#c504ffff",
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
