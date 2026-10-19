# vite-vs-webpack-peek

Code for my post [Notes from Evan You talk at CityJS Singapore 2026](https://trungvose.com/blog/evan-you-cityjs-singapore-2026-voidzero/).

| Folder | What it is | Open online |
| --- | --- | --- |
| [`vite`](./vite) | The React + TypeScript app from the Vite template | [StackBlitz](https://stackblitz.com/github/trungvose/vite-vs-webpack-peek/tree/main/vite) |
| [`webpack`](./webpack) | The same `main.tsx` and `App.tsx`, set up with webpack and Babel | [StackBlitz](https://stackblitz.com/github/trungvose/vite-vs-webpack-peek/tree/main/webpack) |
| [`parse`](./parse) | Parse `greet.js` and `Greet.tsx` with [oxc-parser](https://oxc.rs/docs/guide/usage/parser.html) and write the AST to JSON | [StackBlitz](https://stackblitz.com/github/trungvose/vite-vs-webpack-peek/tree/main/parse) |

Run locally:

```bash
cd vite      # or webpack
npm install
npm run dev

cd parse
npm install
npm run parse   # writes greet.js.ast.json and Greet.tsx.ast.json
```
