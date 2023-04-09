import Link from "next/link";
import { SHOWCASE_LIST } from "../../components/scenes/list";
import NewHeader from "@/components/NewHeader";

export default function ThreeIndexPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white min-h-screen">
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 py-8 lg:py-20 ">
        <NewHeader
          nav={{
            href: "/3d",
            name: "3D Showcase",
          }}
        />
        <div className="grid sm:grid-cols-3 gap-4">
          {SHOWCASE_LIST.map((l, i) => (
            <div
              key={i}
              className="shadow rounded-md bg-gray-700 relative overflow-hidden flex items-around"
            >
              <Link
                href={l.external ? (l.href as string) : `/3d/${l.id}`}
                passHref
              >
                <img
                  className="cursor-pointer rounded-md"
                  alt={l.name}
                  src={l.img}
                />
              </Link>
              <div className="absolute bg-blue-50 text-gray-600 px-2 py-1 rounded bottom-0 left-0 dark:bg-gray-700 dark:text-white">
                {l.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
