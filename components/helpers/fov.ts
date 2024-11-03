const getFov = (customFov = 50) =>
  typeof window !== "undefined" && window.innerWidth > 700 ? customFov : 90;

export default getFov;
