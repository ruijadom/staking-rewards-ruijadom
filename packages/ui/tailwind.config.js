/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // @ts-ignore
  presets: [require("@ruijadom/tailwind-config")],
};

module.exports = config;
