/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        neutral: {
          1: '#fcfcfc',
          2: '#f8f8f8',
          3: '#f3f3f3',
          4: '#ededed',
          5: '#e8e8e8',
          6: '#e2e2e2',
          7: '#dbdbdb',
          8: '#c7c7c7',
          9: '#8f8f8f',
          10: '#858585',
          11: '#6f6f6f',
          12: '#202020',
        },
        primary: {
          1: '#fbfdff',
          2: '#f5faff',
          3: '#eaf6ff',
          4: '#e1f0ff',
          5: '#cee7fe',
          6: '#b7d9f8',
          7: '#96c7f2',
          8: '#5eb0ef',
          9: '#0091ff',
          10: '#0081f1',
          11: '#006adc',
          12: '#00254d',
        },
        overlay: {
          1: 'rgba(0, 0, 0, 0.01)',
          2: 'rgba(0, 0, 0, 0.03)',
          3: 'rgba(0, 0, 0, 0.05)',
          4: 'rgba(0, 0, 0, 0.07)',
          5: 'rgba(0, 0, 0, 0.09)',
          6: 'rgba(0, 0, 0, 0.11)',
          7: 'rgba(0, 0, 0, 0.14)',
          8: 'rgba(0, 0, 0, 0.22)',
          9: 'rgba(0, 0, 0, 0.44)',
          10: 'rgba(0, 0, 0, 0.48)',
          11: 'rgba(0, 0, 0, 0.56)',
          12: 'rgba(0, 0, 0, 0.91)',
        },
        error: {
          1: '#fffcfc',
          2: '#fff8f8',
          3: '#ffefef',
          4: '#ffe5e5',
          5: '#fdd8d8',
          6: '#f9c6c6',
          7: '#f3aeaf',
          8: '#eb9091',
          9: '#e5484d',
          10: '#dc3d43',
          11: '#cd2b31',
          12: '#381316',
        },
        success: {
          1: '#fbfefc',
          2: '#f2fcf5',
          3: '#e9f9ee',
          4: '#ddf3e4',
          5: '#ccebd7',
          6: '#b4dfc4',
          7: '#92ceac',
          8: '#5bb98c',
          9: '#30a46c',
          10: '#299764',
          11: '#18794e',
          12: '#153226',
        },
        warning: {
          1: '#FDFDF9',
          2: '#FFFCE8',
          3: '#FFFBD1',
          4: '#FFF8BB',
          5: '#FEF2A4',
          6: '#F9E68C',
          7: '#EFD36C',
          8: '#EBBC00',
          9: '#F5D90A',
          10: '#F7CE00',
          11: '#946800',
          12: '#35290F',
        },
      },
      borderRadius: {
        none: '0',
        xs: '4px',
        sm: '8px',
        DEFAULT: '0.25rem',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        full: '9999px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
      fontWeight:{
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      blur: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '40px',
      },
      keyframes: {
        dropdown: {
          '0%': { transform: 'scaleY(0)', opacity: 0 },
          '100%': { transform: 'scaleY(1)', opacity: 1 },
        },
      },
      animation: {
        dropdown: 'dropdown 0.18s ease-in-out',
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2rem', // Customize your h1 styles here
              fontWeight: '700',
              lineHeight: '2.5rem',
            },
            h2: {
              fontSize: '1.75rem', // Customize your h2 styles here
              fontWeight: '600',
              lineHeight: '2.25rem',
            },
            h3: {
              fontSize: '1.5rem', // Customize your h3 styles here
              fontWeight: '500',
              lineHeight: '2rem',
            },
            h4: {
              fontSize: '1.25rem', // Customize your h4 styles here
              fontWeight: '500',
              lineHeight: '1.75rem',
            },
            h5: {
              fontSize: '1rem', // Customize your h5 styles here
              fontWeight: '500',
              lineHeight: '1.5rem',
            },
            h6: {
              fontSize: '0.875rem', // Customize your h6 styles here
              fontWeight: '500',
              lineHeight: '1.25rem',
            },
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
