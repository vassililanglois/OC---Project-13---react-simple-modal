# React Simple Modal

A customizable React modal component.

## Requirements

- **Node.js** version 14.x or higher
- **npm** (usually installed with Node.js)
- Recommended code editor: [Visual Studio Code](https://code.visualstudio.com/)

## Installation

```bash
npm install react-simple-modal-by-vassili-langlois
```

## Usage

```jsx
import React from "react";
import Modal from "react-simple-modal-by-vassili-langlois";
import "react-simple-modal-by-vassili-langlois/dist/modal.css";

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

| Prop                   | Type     | Description                           |
| ---------------------- | -------- | ------------------------------------- |
| `isOpen`               | boolean  | Controls whether the modal is visible |
| `onClose`              | function | Callback fired when closing the modal |
| `children`             | node     | Content inside the modal              |
| `containerClassName`   | string   | Custom class for the outer container  |
| `containerStyle`       | object   | Inline styles for the outer container |
| `modalClassName`       | string   | Custom class for the modal box        |
| `modalStyle`           | object   | Inline styles for the modal box       |
| `contentClassName`     | string   | Custom class for the content wrapper  |
| `contentStyle`         | object   | Inline styles for the content wrapper |
| `closeButtonClassName` | string   | Custom class for the close button     |
| `closeButtonStyle`     | object   | Inline styles for the close button    |

## CSS Customization

The modal uses default class names and also supports full customization via props.

Simplified HTML structure:

<div class="modal-container show [containerClassName]">
  <div class="modal show [modalClassName]">
    <div class="modal-content [contentClassName]">
      <!-- children -->
    </div>
    <div class="close-button-container">
      <button class="close-button [closeButtonClassName]">×</button>
    </div>
  </div>
</div>

You can override any part of the modal with your own class or inline styles using the className and style props.

## Links

- [NPM Package](https://www.npmjs.com/package/react-simple-modal-by-vassili-langlois)
- [GitHub Repository](https://github.com/vassililanglois/OC---Project-13---react-simple-modal.git)

## License

MIT

# OC---Project-13---react-simple-modal
