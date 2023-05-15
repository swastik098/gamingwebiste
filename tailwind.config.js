/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["hauss", "Tahoma", "Sans-Serif"],
      serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      mono: ["Courier New", "monospace"],
    },
    extend: {
      colors: {
        peach: "#3C2A21", // Replace with your preferred peach color
        lavendre: "#D4ADFC",
        // blue: "#03C988",
      },
    },
  },
  plugins: [],
};

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
