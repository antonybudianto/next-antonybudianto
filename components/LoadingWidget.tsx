const LoadingWidget = () => (
  <div
    style={{
      position: "fixed",
      transform: "translate(-50%, -50%)",
      left: "50%",
      top: "50%",
      color: "#0A2342",
      padding: "20px 15px",
      background: "rgba(255,255,255,0.7)",
      borderRadius: "20px",
    }}
  >
    Crafting...
  </div>
);

export default LoadingWidget;
