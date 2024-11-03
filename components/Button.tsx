const Button = ({ dark, children, className = "", textColor = "", ...p }) => (
  <button
    {...p}
    className={`w-auto shadow-md flex-none ${dark ? "bg-gray-700" : "bg-white"} 
    ${dark ? "hover:bg-gray-600" : "hover:bg-blue-100"}
     ${
       textColor ? textColor : dark ? "text-white" : "text-gray-900"
     } text-lg ml-2 leading-6 font-semibold py-1 px-3 lg:py-2 lg:px-5 border border-transparent rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-${
      dark ? "gray-900" : "blue-300"
    } focus:outline-none transition-colors duration-200 ${className}`}
  >
    {children}
  </button>
);

export default Button;
