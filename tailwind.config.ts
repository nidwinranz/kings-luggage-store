import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  theme: {

    
    extend: {

      screens: {     
        'sm': '375px',  
        'md': '1024px',  
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px'
    
      },

      fontFamily:{
        beautiful:['"Oswald"', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
