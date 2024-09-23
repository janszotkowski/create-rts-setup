
# My App

This project was created using the `create-rts-kit` template. It includes a React, TypeScript, ESLint, Stylelint, and rsbuild setup out of the box.

## Getting Started

To start the development server, install the dependencies and run the following commands:

### Installation:

```bash
yarn install
```

### Running the development server:

```bash
yarn dev
```

This will start the development server using `rsbuild`.

## Project Structure

The project structure is as follows:

```
src/
├── App.css
├── App.tsx
├── index.tsx
tsconfig.json
eslint.config.mjs
rsbuild.config.ts
.stylelintrc.json
package.json
README.md
```

## Available Scripts

In the project, you can run:

- `yarn dev` - Starts the development server.
- `yarn lint` - Lints your TypeScript files using ESLint.
- `yarn lint:style` - Checks your styles using Stylelint.

## TypeScript Configuration

The `tsconfig.json` file contains the configuration for TypeScript. You can modify it based on your needs. 

## Linting

- **ESLint** is configured for TypeScript and React code. The rules are set in `eslint.config.mjs`.
- **Stylelint** is configured for linting CSS or styled components. You can adjust the rules in `.stylelintrc.json`.

## Learn More

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [ESLint Documentation](https://eslint.org/docs/user-guide/getting-started)
- [Stylelint Documentation](https://stylelint.io/)

## License

This project is licensed under the MIT License.
