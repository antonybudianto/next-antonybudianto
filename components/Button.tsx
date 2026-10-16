/**
 * Floating control over the 3D scenes. The scene has its own day/night toggle
 * independent of the site theme, so the button follows `dark` rather than the
 * site tokens.
 */
const Button = ({ dark, active = false, children, className = "", ...p }) => (
  <button
    type="button"
    {...p}
    className={`flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200 ${
      dark
        ? "border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80"
        : "border-black/5 bg-white/70 shadow-sm hover:bg-white"
    } ${
      active
        ? dark
          ? "text-sky-300"
          : "text-blue-600"
        : dark
        ? "text-zinc-100"
        : "text-zinc-800"
    } ${className}`}
  >
    {children}
  </button>
);

export default Button;
