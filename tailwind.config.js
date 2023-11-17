/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "public/pengajuan_proposal.html",
    "public/daftar_ruangan.html",
    "public/popup.html",
  ],
  theme: {
    extend: {
      spacing: {
        /* mengatur ukuran spacing */ 13: "3.25rem" /* key : value */,
      },
      fontFamily: {
        /* mengatur font */ inter: ["Inter", "sans-serif"],
      },
      colors: {
        /* mengatur warna */ transparent: "transparent",
        current: "currentColor",
        primary: "#0E51FF",
        darkprimary: "#2613FD",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        kopi: "#c0ffee",
      },
      animation: {
        /* mengatur animasi */ "spin-slow": "spin 3s linear infinite",
        goyang: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        /* membuat nama animasi baru */
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
