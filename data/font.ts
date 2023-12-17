import localFont from "next/font/local";

export const Copperplate = localFont({
    src: [
      {
        path: "../font/Copperplate Gothic Light Regular.ttf",
        weight: "400",
        style: "normal",
      },
      {
        path: "../font/Copperplate Gothic Bold Regular.ttf",
        weight: "500",
        style: "normal",
      },
    ],
  });