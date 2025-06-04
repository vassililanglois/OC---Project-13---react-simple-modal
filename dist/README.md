# React Simple Modal

A customizable React modal component.

## Requirements

- **Node.js** version 14.x or higher
- **npm** (usually installed with Node.js)
- Recommended code editor: [Visual Studio Code](https://code.visualstudio.com/)

## Installation

```bash
npm install react-simple-modal
```

## Usage

```jsx
import React from "react";
import Modal from "@vassili/modal";
import "@vassili/modal/dist/modal.css";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div>Your content here</div>
      </Modal>
    </>
  );
}
```

## Props

| Prop     | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| isOpen   | boolean  | Show or hide the modal          |
| onClose  | function | Callback when closing the modal |
| children | node     | Modal content                   |

## Links

- [NPM Package](https://www.npmjs.com/package/react-simple-modal-by-vassili-langlois)
- [GitHub Repository](https://github.com/ton-username/react-simple-modal)

## License

MIT
