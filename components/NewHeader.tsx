import Link from "next/link";
import DarkmodeButtonWrapper from "./DarkmodeButtonWrapper";

export default function NewHeader() {
  return (
    <div className="fixed top-0 left-0 px-2 py-2 lg:py-3 w-full z-40 backdrop-blur-lg font-semibold">
      <div className="flex container mx-auto justify-between items-center">
        <div className="text-slate-700 dark:text-white font-bold text-lg">
          <Link title="Home" href="/">
            antonybudianto
          </Link>
        </div>
        <DarkmodeButtonWrapper />
      </div>
    </div>
  );
}
