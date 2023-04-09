import type { FC, MouseEventHandler, ReactNode } from "react";

interface DarkmodeButtonProps {
  children: ReactNode | ReactNode[];
  className?: string;
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const DarkmodeButton: FC<DarkmodeButtonProps> = ({
  children,
  className = "",
  title,
  onClick = () => {},
}) => (
  <div className="top-3 right-3 z-50">
    <button
      title={title}
      onClick={onClick}
      suppressHydrationWarning
      className={`w-auto shadow-md flex-none bg-blue-50 dark:bg-gray-700
    hover:bg-blue-100 dark:hover:bg-gray-600
    text-gray-900 dark:text-white 
    text-lg ml-2 leading-6 font-semibold py-1 px-3 lg:py-2 lg:px-5 border border-transparent rounded-xl focus:ring-2 
    focus:outline-none transition-colors duration-200 ab-fade ab-time--1 ${className}`}
    >
      {children}
    </button>
  </div>
);

export default DarkmodeButton;
