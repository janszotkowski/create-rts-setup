
# create-rts-kit

A simple project template for setting up a React, TypeScript, ESLint, Stylelint, and rsbuild environment quickly.

## Features

- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **ESLint**: Linting tool for JavaScript/TypeScript to help maintain code quality.
- **Stylelint**: Linter for CSS/SCSS and styled-components.
- **rsbuild**: A fast and simple build tool.

## Installation

You can create a new project using this template with either `npx` or `yarn`.

### Using `npx`:

```bash
npx create-rts-kit my-app
cd my-app
yarn install
```

### Using `yarn`:

```bash
yarn create rts-kit my-app
cd my-app
yarn install
```

Replace `my-app` with your desired project name.

## Project Structure

Once the project is created, the folder structure looks like this:

```
my-app/
├── src/
│   ├── App.tsx
│   ├── index.tsx
├── tsconfig.json
├── eslint.config.mjs
├── rsbuild.config.ts
├── .stylelintrc.json
├── package.json
└── README.md
```

## Scripts

Inside your project, you can run the following scripts:

- `yarn dev` - Starts the development server using `rsbuild`.
- `yarn lint` - Runs ESLint to lint the `.ts` and `.tsx` files.
- `yarn stylelint` - Runs Stylelint to check your styles.

## Customization

Feel free to customize the `tsconfig.json`, `eslint.config.mjs`, `rsbuild.config.ts` or `.stylelintrc.json` to fit your project’s needs.

## License

This project is licensed under the MIT License.
