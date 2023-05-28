/** @type {import('tailwindcss').Config} */
export const content = ["./src/components/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    sans: ["PT Sans", "Arial", "sans-serif"],
    serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
    mono: ["Courier New", "monospace"],
  },
  extend: {
    colors: {
      peach: "#3C2A21",
      lavendre: "#D4ADFC",
      blue: "#00FFFF",
    },
  },
};
export const plugins = [];

// module.exports = {
//   theme: {
//     fontFamily: {
//       sans: ["hauss", "Tahoma", "Sans-Serif"],
//       serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
//       mono: ["Courier New", "monospace"],
//     },
//   },
//   variants: {},
//   plugins: [],
// };
