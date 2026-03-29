/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // 폴더 구조에 따라 추가
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), // 우리가 설치한 마크다운 플러그인
  ],
}