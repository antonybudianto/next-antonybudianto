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
  <button
    type="button"
    title={title}
    aria-label={title}
    onClick={onClick}
    suppressHydrationWarning
    className={`icon-btn ${className}`}
  >
    {children}
  </button>
);

export default DarkmodeButton;
