/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-banner': "url('./public/pictures/banner.jpg')",
        'food1': "url('https://cdn.leonardo.ai/users/6b05b28b-2898-4981-b04a-aedf76061171/generations/67e869f7-3013-499a-97d0-1c54a9f007bb/Leonardo_Diffusion_Spaghetti_Aglio_e_Olio_0.jpg')"
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

