export default function FloatingWhatsApp() {
  const phone = "919354530349";

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "60px",
        height: "60px",
        background: "#25D366",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textDecoration: "none",
        fontSize: "30px",
        zIndex: 9999,
      }}
    >
      💬
    </a>
  );
}