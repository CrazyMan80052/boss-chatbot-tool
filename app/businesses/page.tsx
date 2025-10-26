import Link from "next/link";
import BusinessLogo from "@/components/business-logo";

export default function ViewBusiness() {
  const businesses = [
    {
      id: "1",
      // Fineline WOW
      url: "https://www.finelinewow.com/",
      logo: "https://www.google.com/s2/favicons?domain=www.finelinewow.com&sz=64",
      name: "Fineline WOW",
      field: "Auto Services",
      rating: 4,
    },
    {
      id: "2",
      // Alternative Auto Care
      url: "https://alternativeautocare.com/",
      logo: "https://www.google.com/s2/favicons?domain=alternativeautocare.com&sz=64",
      name: "Alternative Auto Care",
      field: "Auto Repair",
      rating: 4,
    },
    {
      id: "3",
      // Keen's Body Shop
      url: "https://www.keensbodyshop.com/",
      logo: "https://www.google.com/s2/favicons?domain=www.keensbodyshop.com&sz=64",
      name: "Keen's Body Shop",
      field: "Auto Body",
      rating: 5,
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
        color: "#fdfdfdff",
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
                  color: "#ffffffff",
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
                  color: "#ffffffff",
                  fontWeight: 700,
                }}
              >
                Name
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#ffffffff",
                  fontWeight: 700,
                }}
              >
                Field
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#ffffffff",
                  fontWeight: 700,
                }}
              >
                Rating
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "0.75rem",
                  color: "#ffffffff",
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
                  <a
                    href={b.url}
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 12 }}
                    target="_blank"
                    title={`Open ${b.name}`}
                  >
                    <BusinessLogo
                      height={80}
                      name={b.name}
                      src={b.logo}
                      width={140}
                    />
                  </a>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <a
                    href={b.url}
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: 700,
                    }}
                    target="_blank"
                  >
                    {b.name}
                  </a>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <a
                    href={b.url}
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    target="_blank"
                  >
                    {b.field}
                  </a>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <a
                    href={b.url}
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                      fontSize: 18,
                    }}
                    target="_blank"
                  >
                    <span aria-hidden="true" title={`${b.rating} out of 5`}>
                      {"★".repeat(Math.max(0, Math.min(5, b.rating)))}
                      {"☆".repeat(5 - Math.max(0, Math.min(5, b.rating)))}
                    </span>
                    <span className="sr-only">{b.rating} out of 5</span>
                  </a>
                </td>
                <td style={{ padding: 12, verticalAlign: "middle" }}>
                  <a
                    href={b.url}
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    target="_blank"
                  >
                    {/* placeholder for notes */}
                  </a>
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
