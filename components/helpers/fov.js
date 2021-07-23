const getFov = () =>
  typeof window !== "undefined" && window.innerWidth > 700 ? 50 : 80;

export default getFov;
