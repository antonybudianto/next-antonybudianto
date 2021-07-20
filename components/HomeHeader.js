import Link from "next/link";
import Button from "./Button";

function HomeHeader({
  credits = [],
  title,
  dark,
  setDark,
  autoRotate,
  setAutoRotate,
}) {
  const showCredit = async () => {
    const Swal = (await import("sweetalert2")).default;
    Swal.fire({
      title: "<strong>Credits</strong>",
      icon: "info",
      html: `
      <div class="text-sm">
        Big thanks to these sites for the texture!
        <ul>
          ${credits
            .map(
              (c) =>
                `<li><a class="text-blue-600 underline" href="${c}">${c}</a></li>`
            )
            .join("\n")}
        </ul>
      </div>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      showCancelButton: false,
      focusConfirm: false,
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 9,
        left: 0,
        top: 0,
        padding: "20px",
      }}
    >
      <div className="flex align-center justify-between">
        <div className={dark ? "text-white" : "text-blue-900"}>
          <div className="text-sm lg:text-lg">{title}</div>
          <div className="text-xs lg:text-sm">
            by{" "}
            <Link href="/">
              <a className="underline">Antony Budianto</a>
            </Link>
          </div>
        </div>
        <div className="select-none flex align-center justify-center">
          {credits.length ? (
            <Button title="Info" dark={dark} onClick={showCredit}>
              {"ℹ️"}
            </Button>
          ) : null}
          <Button
            title="Switch Auto-rotate"
            dark={dark}
            onClick={() => {
              setAutoRotate(!autoRotate);
            }}
            className={
              autoRotate ? (dark ? "text-blue-200" : "text-blue-500") : ""
            }
          >
            {"↺"}
          </Button>
          <Button
            title="Switch Night Mode"
            dark={dark}
            onClick={() => {
              setDark(!dark);
            }}
          >
            {dark ? "🌙" : "☀️"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
