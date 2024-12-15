# Easy Animation Library

A simple and lightweight animation library for web applications.

## Features

- Fade In/Out animations
- Slide In/Out animations
- Zoom In/Out animations
- Rotate In/Out animations
- Scale Up/Down animations
- Animation Queue for sequential animations
- Callback support for animations

## Installation

You can install the library via npm:

```bash
npm install easy-animation-library
```

## Usage

### Importing the Library

You can use the library in both JavaScript and TypeScript.

#### In JavaScript

```javascript
import { fadeIn, fadeOut, AnimationQueue } from 'easy-animation-library';

const element = document.getElementById('myElement');

// Fade In
fadeIn(element, 500, () => {
    console.log('Fade In completed');
});

// Create an animation queue
const queue = new AnimationQueue();
queue.enqueue(() => fadeOut(element, 500, () => {
    console.log('Fade Out completed');
}));

// Start the queue
queue.runNext();
```

#### In TypeScript

```typescript
import { fadeIn, fadeOut, AnimationQueue } from 'easy-animation-library';

const element = document.getElementById('myElement') as HTMLElement;

// Fade In
fadeIn(element, 500, () => {
    console.log('Fade In completed');
});

// Create an animation queue
const queue = new AnimationQueue();
queue.enqueue(() => fadeOut(element, 500, () => {
    console.log('Fade Out completed');
}));

// Start the queue
queue.runNext();
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or feedback, please reach out to:

- **Name**: Hamin Cho
- **Email**: chohamin0611@gmail.com
- **GitHub**: [Hxmxx](https://github.com/Hxmxx)
