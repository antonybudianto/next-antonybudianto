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
    className={`flex h-7 w-7 items-center justify-center border border-rule text-mute transition-colors duration-200 hover:border-cool hover:text-ink ${className}`}
  >
    {children}
  </button>
);

export default DarkmodeButton;
