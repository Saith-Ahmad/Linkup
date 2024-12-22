// import type { Config } from 'tailwindcss';

// const config = {
//   darkMode: ['class'],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
//   ],
//   prefix: '',
//   theme: {
//     container: {
//       center: true,
//       padding: '2rem',
//       screens: {
//         '2xl': '1400px',
//       },
//     },
//     extend: {
//       colors: {
//         primary:{
//           1 : "#F9A90E"
//         },
//         dark: {
//           1: '#1C1F2E',
//           2: '#161925',
//           3: '#252A41',
//           4: '#1E2757',
//         },
//         blue: {
//           1: '#0E78F9',
//         },
//         sky: {
//           1: '#C9DDFF',
//           2: '#ECF0FF',
//           3: '#F5FCFF',
//         },
//         orange: {
//           1: '#FF742E',
//         },
//         purple: {
//           1: '#830EF9',
//         },
//         yellow: {
//           1: '#F9A90E',
//         },
//       },
//       keyframes: {
//         'accordion-down': {
//           from: { height: '0' },
//           to: { height: 'var(--radix-accordion-content-height)' },
//         },
//         'accordion-up': {
//           from: { height: 'var(--radix-accordion-content-height)' },
//           to: { height: '0' },
//         },
//       },
//       animation: {
//         'accordion-down': 'accordion-down 0.2s ease-out',
//         'accordion-up': 'accordion-up 0.2s ease-out',
//       },
//       backgroundImage: {
//         hero: "url('/images/hero.png')",
//         bg1: "radial-gradient( circle 710px at 5.2% 7.2%,  rgba(37,90,222,0.6) 0%, rgba(37,90,222,0.4) 9.5%, rgba(4,4,29,1) 42.7% )",
//       },
//     },
//   },
//   plugins: [require('tailwindcss-animate')],
// } satisfies Config;

// export default config;



import type { Config } from 'tailwindcss';
import svgToDataUri from 'mini-svg-data-uri';

const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = theme('colors') || {};
  const flattenedColors = Object.entries(allColors).reduce((acc: any, [key, val]: [string, any]) => {
    if (typeof val === 'string') {
      acc[`--${key}`] = val;
    } else {
      Object.entries(val).forEach(([subKey, subVal]) => {
        acc[`--${key}-${subKey}`] = subVal;
      });
    }
    return acc;
  }, {});

  addBase({
    ':root': flattenedColors,
  });
};

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: {
          1: '#F9A90E',
        },
        dark: {
          1: '#1C1F2E',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        blue: {
          1: '#0E78F9',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        purple: {
          1: '#830EF9',
        },
        yellow: {
          1: '#F9A90E',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        hero: "url('/images/hero.png')",
        bg1: "radial-gradient(circle 710px at 5.2% 7.2%, rgba(37,90,222,0.6) 0%, rgba(37,90,222,0.4) 9.5%, rgba(4,4,29,1) 42.7%)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          'bg-grid': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-grid-small': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          'bg-dot': (value: string) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: theme('backgroundColor'), type: 'color' }
      );
    },
  ],
};

export default config;
