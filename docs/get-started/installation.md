---
sidebar_position: 1
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button } from 'adroit-ui';

# Installation
<div className ="font-semibold text-neutral-3">Let's get started with Adroit UI in minutes! </div>

## Setup
### 1. Installing the library
Start by installing AdroitUI using **npm** or **yarn**

<Tabs>
<TabItem value='npm' label='npm' default>
```sh
npm install adroit-ui@latest
```
</TabItem>
<TabItem value='yarn' label='yarn' default>
```sh
yarn add adroit-ui
```
</TabItem>
</Tabs>

:::info
Adroit UI is built upon <span className='text-primary-9'>[Tailwind CSS](https://tailwindcss.com)</span> for styling its components. To effectively utilize Adroit UI, it is essential to have Tailwind CSS installed and properly configured within your project.
:::

Learn <span className='text-primary-9'>[how to install and configure Tailwind CSS](https://tailwindcss.com/docs/installation)</span> here.

Great!🎉 You are almost done, just last few steps.

### 2. Configuration

After installing Tailwind CSS and Adroit UI, You need to alter some files in your project now.
<details>
<summary>Replace the content of `tailwind.config.js` file with the content below:</summary>
```js title="tailwind.config.js"
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/adroit-ui/dist/adroit-ui.js"
  ],
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
    }
  },
  plugins: [],
};
```
</details>

### 3. Adding Directives
Next Up, Add the Tailwind directives to your CSS

- Add the `@tailwind` directives for each of Tailwind’s layers and adroitUI's import to your main CSS file.
```css
@import "../node_modules/adroit-ui/dist/style.css";
@tailwind base;
@tailwind components;
@tailwind utilities;
```
Awesome!🥳 You are all set to add AdroitUI components in your projects.
## Import your first component from AdroitUI

Create a component at `src/components/button.jsx`:

```jsx title="src/components/button.jsx"
import React from 'react';
import { Button } from 'adroit-ui';

export default function ButtonComponent() {
  return (
    <>
      <Button size="lg" label="hello world" radius="sm"/>
    </>
  );
}
```
<Button size="lg" label="hello world" radius="sm" className="mb-4"></Button>

* Now, Import this component in the main page of your project (`index.jsx` / `app.jsx`) and see the magic happen 🪄

## Development
**Adroit UI** is an **open-source project** that you can contribute to on <span className='text-primary-9'>[GitHub](https://www.github.com/kartikbindra/adroit-ui)</span>. If you appreciate the project, please consider giving it a star🌟 to show your support. Thank you🙏