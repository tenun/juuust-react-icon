# Tenun React Icons

Tenun React Icons is set collection of [Tenun icons](https://www.figma.com/file/EXwWuLGcKuH96Nu6ApvaIK/%40tenun%2Ficon%2Fdefault?node-id=112%3A0) that can be used in React project. This project used [Figma Icon Automation Plugin](https://github.com/leadream/figma-icon-automation) to generate changes from Figma files and pushes to this repository.

## Installation

To install Tenun React Icons is via npm package.

```bash
yarn add @tenun/react-icon
```

or

```bash
npm install --save @tenun/react-icon
```

## Usage

To use Tenun React Icons is simply to import the icons on the code.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { CircleSort, SquarePlus } from '@tenun/react-icon';

const App = () => {
  return (
    <div>
      <CircleSort />
      <SquarePlus color='#7C59D4' size={32} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
```

### Props

Tenun Icon components can accept all props for SVG element such as `color`, `size`, `alt`, and more.

- **color**: `string` – Icon's stroke or fill color. By default it use `currentColor`.
- **size**: `number | string` – Icon height & width. For the number it uses `px` and for the string it can be used with other units as well, just specify the units `%`, `em`, `rem`, `pt`, `cm`, `mm`, `in`.
- **alt**: `string` – Add accessible alt text to an icon.

## Development

Create a `.env` in the root directory. Put Tenun Figma file url and Figma token inside.

```
FIGMA_FILE_URL=https://www.figma.com/file/********************/tenun-icons
FIGMA_TOKEN=********************************
```

### fetch SVG file

Run `yarn fetch` to fetch SVG files from Figma file. This will pull the SVGs in `./src/svg/`.

### generate React components for icons

Run `yarn generate` to generate component files from SVG files. This will pull your component files in `./src/icons/`.

### Develop in local

Run `yarn dev` to develop the application in which you can see all icons.

### Develop in local

Run `yarn build` to build Pages.

---

## License

MIT © Tenun React Icons
