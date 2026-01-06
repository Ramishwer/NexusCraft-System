import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { install, observe } from '@twind/core';
import presetTailwind from '@twind/preset-tailwind';

// Setup Twind runtime for CSS-in-JS utility styles.
// This handles Tailwind classes at runtime without the external Play CDN,
// eliminating production warnings on GitHub Pages.
// Capture the tw instance to use with the observe function.
const tw = install({
  presets: [presetTailwind()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        blue: {
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        },
        slate: {
          950: '#020617',
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 80px -20px rgba(0, 0, 0, 0.4)',
      }
    }
  }
});

// Observe document to ensure all generated classes are injected into the DOM.
// Pass the tw instance as the first argument to fix the TypeScript error.
observe(tw, document.documentElement);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);