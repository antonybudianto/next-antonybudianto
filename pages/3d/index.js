import Link from "next/link";

const LIST = [
  {
    name: "Maldive Mini",
    img: "/meta-maldive-mini.jpg",
    href: "/3d/maldive-mini",
  },
  {
    name: "Apartment",
    img: "/meta-home.jpg",
    href: "/home",
  },
];

export default function MaldiveMiniPage() {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 text-gray-800 dark:text-white lg:h-screen">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-16 lg:py-10 ">
        <div className="text-4xl">3D Showcase</div>
        <div>
          by{" "}
          <Link href="/">
            <a className="text-blue-600 dark:text-blue-300">Antony Budianto</a>
          </Link>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {LIST.map((l, i) => (
            <div
              key={i}
              className="shadow rounded-md relative overflow-hidden flex items-around"
            >
              <Link href={l.href}>
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
