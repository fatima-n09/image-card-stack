#  Image Card Stack

An interactive image stack component built with React and Motion. Features smooth 3D animations, drag interactions, and a reusable component architecture that can work with any type of stackable content.

##  Tech

- `React `
- `TypeScript`
- `Motion` (Framer Motion successor)
- `Tailwind CSS `
- `Vite `

##  Architecture

Set out to create something that feels a bit tactile like handling real cards. What began as a simple drag interaction evolved into a more authentic experience with 3D rotations that respond to movement, making each interaction dynamic and natural. The design is fully modular: the core CardStack component manages the logic, while ImageCardStack shows how it can be customized. Smooth spring animations add that satisfying snap-back effect, and the flexibility means you can stack images, content cards, or any elements you need.
##  The Process

- **`CardStack<T>`** - Generic draggable stack component accepting any `StackableItem`
- **`DraggableContainer`** - Handles drag physics and 3D motion effects  
- **`useCardRotation`** - Custom hook managing drag interactions and threshold detection
- **`ImageCardStack`** - Concrete implementation for image galleries
- **`StackableItem`** - TypeScript interface ensuring type safety across components

##  Running the Project

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open `http://localhost:5173` in your browser



