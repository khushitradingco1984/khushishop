export default function FeaturedProducts() {
  const products = [
    "Designer Tiles",
    "Imported Tiles",
    "LED Mirror",
    "Wash Basin",
  ];

  return (
    <section
      style={{
        padding: "80px 8%",
        background: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "42px",
          color: "#111111",
          fontWeight: "700",
          marginBottom: "15px",
        }}
      >
        Our Products
      </h2>

      <p
        style={{
          textAlign: "center",
          color: "#555555",
          fontSize: "18px",
          marginBottom: "50px",
        }}
      >
        Premium Tiles, Interior Products & Home Decoration Solutions
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((item) => (
          <div
            key={item}
            style={{
              background: "#ffffff",
              border: "1px solid #dddddd",
              borderRadius: "12px",
              padding: "35px",
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3
              style={{
                color: "#111111",
                fontSize: "22px",
                margin: "0",
              }}
            >
              {item}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}