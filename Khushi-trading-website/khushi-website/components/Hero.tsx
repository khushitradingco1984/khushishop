export default function Hero() {
  return (
    <section
      style={{
        minHeight: "75vh",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          background: "rgba(255,255,255,0.10)",
          backdropFilter: "blur(10px)",
          padding: "50px",
          borderRadius: "20px",
          maxWidth: "850px",
          color: "#fff",
        }}
      >
        <h4
          style={{
            color: "#FFD54F",
            letterSpacing: "3px",
            marginBottom: "15px",
            textTransform: "uppercase",
          }}
        >
          Premium Tiles & Interior Solutions
        </h4>

        <h1
          style={{
            fontSize: "60px",
            marginBottom: "20px",
            fontWeight: "700",
          }}
        >
          Khushi Trading Co.
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            color: "#f5f5f5",
            marginBottom: "35px",
          }}
        >
          Transform your home with premium tiles, designer surfaces,
          LED mirrors, wash basins and complete interior solutions.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#FFD54F",
              color: "#111",
              border: "none",
              padding: "16px 36px",
              borderRadius: "8px",
              fontSize: "18px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            View Products
          </button>

          <button
            style={{
              background: "transparent",
              color: "#fff",
              border: "2px solid white",
              padding: "16px 36px",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}