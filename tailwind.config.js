/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'head_text': '#333333',
      'button_cta': '#A84266',
      'para_text': '#434141',
      'link_text_lg': '#05B4A2',
      'footer_color': '#76A0BC',
      'footer_para_text': '#F0F5F8',
    },
    extend: {},
  },
  plugins: [],
}
