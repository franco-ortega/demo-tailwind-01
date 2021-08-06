# demo-tailwind-01

## Setup

### React
1. npx create-react-app . (install in current directory)

### Tailwind - https://tailwindcss.com/docs/guides/create-react-app
2. npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
3. npm install @craco/craco
4. Replace React scripts with Craco scripts (see docs)
5. ADd Craco config file (see docs)
6. Generate Tailwind config file (npx tailwindcss-cli@latest init)
7. Update purge property in Tailwind config (see docs)
8. Update index.css (see docs)

### Eslint
9. npm install eslint --save-dev
10. npm install eslint-plugin-react --save-dev
11. npx eslint --init