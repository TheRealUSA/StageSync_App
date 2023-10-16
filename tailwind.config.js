/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '640px', // Pantalla pequeña (ejemplo)
        'md': '768px', // Pantalla mediana (ejemplo)
        'lg': '1024px', // Pantalla grande (ejemplo)
        'xl': '1280px', // Pantalla extra grande (ejemplo)
        'gg': '502px', // Tu breakpoint personalizado
        'mc': '414px', // Tu breakpoint personalizado
      },
    },
  },
  plugins: [],
}

