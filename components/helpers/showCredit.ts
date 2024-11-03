const showCredit = async (credits: string[]) => {
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
              `<li class="mt-1"><a class="text-blue-700 underline" href="${c}">${c}</a></li>`
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

export default showCredit;
