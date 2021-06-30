const Button = ({ dark, children, className = "", ...p }) => (
  <button
    {...p}
    className={`w-auto shadow-md flex-none bg-${
      dark ? "gray-700" : "white"
    } hover:bg-${dark ? "gray-600" : "blue-100"} ${
      dark ? "text-white" : "text-gray-900"
    } text-lg ml-2 leading-6 font-semibold py-2 px-5 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-${
      dark ? "gray-900" : "blue-300"
    } focus:outline-none transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

export default Button;
