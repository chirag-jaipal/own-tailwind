# Mini Tailwind-like CSS Engine (Vanilla JS)

A lightweight utility-first CSS engine built using JavaScript and the MutationObserver API.
Applies styles dynamically based on class names without using any external CSS file.

---

## Demo

![Project Demo](./assets/screenshot.png)

---

## Overview

This project implements a simple utility-based styling system similar to Tailwind CSS.

- Define styles in a JavaScript object (`stylesMap`)
- Observe DOM changes using MutationObserver
- Apply styles dynamically based on class names

---

## How It Works

1. **Style Mapping**

   ```js
   const stylesMap = {
     "chai-p-4": { padding: "16px" },
     "chai-bg-red": { backgroundColor: "red" },
   };
   ```

2. **Initial DOM Processing**
   - Traverse all elements
   - Apply styles based on existing class names

3. **MutationObserver**
   - Watches for:
     - New elements added (`childList`)
     - Class attribute changes (`attributes`)

   - Applies styles dynamically when changes occur

4. **Style Application**
   - Reads `element.classList`
   - Matches with `stylesMap`
   - Applies inline styles using `Object.assign`

---

## Features

- Utility-first class system
- Dynamic style updates
- No external CSS dependency
- Handles both initial load and runtime DOM changes

---

## Project Structure

```
ROOT/
│── assets/
│   └── profile-pic.jpg
│── index.html
│── main.js
│── .gitignore
```

---

## Tech Stack

- HTML
- JavaScript (DOM APIs)
- MutationObserver

---

## Key Concepts

- DOM manipulation
- MutationObserver
- Event-driven updates vs polling
- Inline style application

---

## Usage

Clone the repository and open `index.html` in your browser.

```
git clone <your-repo-link>
```

---

## Note

This is a learning project focused on understanding DOM behavior and dynamic styling systems.
