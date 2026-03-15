# Kinetic Type Page Transition

A study project inspired by the [Kinetic Type Page Transition](https://tympanus.net/Development/KineticTypePageTransition/) from Codrops.

## Overview

This project demonstrates kinetic typography-based page transitions using vanilla JavaScript, HTML, and CSS. When navigating between pages, animated letters appear on screen creating a dynamic transition effect.

## Features

- **Smooth Page Transitions**: Navigate between pages with animated typography effects
- **Two Transition Styles**:
  - Standard: Displays "TRANSITION" text with staggered letter animations
  - Random: Shows random characters that shuffle during animation
- **Responsive Design**: Works on desktop and mobile devices
- **No Dependencies**: Pure vanilla JavaScript, no frameworks required

## Files Structure

```
kinetic-type/
├── index.html      # Main HTML structure
├── styles.css      # Styling and animations
├── script.js       # Transition logic and animations
└── README.md       # This file
```

## How to Run

Simply open `index.html` in your web browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local server
python3 -m http.server 8000
# Then visit http://localhost:8000
```

## Usage

1. Click "Next Page" or "Previous" buttons to navigate
2. Watch the kinetic typography transition effect
3. The overlay displays animated letters during page changes

## Customization

### Change Transition Text

In `script.js`, modify the `transitionText` property:

```javascript
this.transitionText = 'YOUR TEXT HERE';
```

### Use Random Character Effect

In `script.js`, uncomment the RandomKineticTransition line:

```javascript
// Change this:
window.kineticTransition = new KineticTransition();

// To this:
window.kineticTransition = new RandomKineticTransition();
```

### Adjust Animation Speed

Modify the transition delays in `script.js`:

```javascript
span.style.transitionDelay = `${index * 0.05}s`; // Change 0.05 to adjust speed
```

## Learning Points

This project demonstrates:

1. **CSS Transitions & Transforms**: Using `transform`, `opacity`, and `transition` for animations
2. **JavaScript Classes**: Organizing code with ES6 classes
3. **Async/Await**: Managing animation sequences with promises
4. **DOM Manipulation**: Creating and animating elements dynamically
5. **Event Handling**: Managing user interactions and navigation

## Browser Support

Works in all modern browsers that support:
- CSS3 transitions and transforms
- ES6 JavaScript features (classes, async/await)

## License

Created for educational purposes. Inspired by the original Codrops demo.

## Resources

- [Original Demo](https://tympanus.net/Development/KineticTypePageTransition/)
- [Codrops Tutorial](https://tympanus.net/codrops/)
- [CSS Transitions MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [JavaScript Async/Await MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
