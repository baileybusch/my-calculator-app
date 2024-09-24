# Math Practice App - Frontend Instructions

## Project Overview
This guide outlines the frontend development for a math practice app designed to help students improve their skills in multiplication, division, addition, and subtraction.

## Feature Requirements

### Core Functionality
- Implement four operations: multiplication, division, addition, and subtraction
- Create three difficulty levels: easy, medium, hard (configurable)
- Allow configuration of the number of questions
- Implement a timer for completing questions (configurable)
- Develop a score keeper to track user performance

### User Interface
- Design a minimal, clean interface
- Create a configuration menu for adjusting game settings
- Implement the following buttons with appropriate functionality:
  - Start: Begin the game
  - Pause: Pause the current game
  - Reset: Reset the game to initial state
  - Clear: Clear the current problem
  - Back: Return to the previous problem
  - Next: Proceed to the next problem
- Ensure the Enter key submits the user's answer

### Animations and Feedback
- Implement a shaking animation for incorrect answers, keeping the focus on the current question
- Display a green tick mark animation for correct answers

## Development Guidelines

### File Structure
Maintain the following file structure:
```
CALCULATOR
└── my-calculator-app
    ├── app
    │   ├── fonts
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components
    │   └── ui
    │       ├── button.tsx
    │       ├── card.tsx
    │       └── input.tsx
    ├── lib
    ├── public
    │   ├── images
    │   └── fonts
    ├── requirements
    │   └── frontend_instructions.md
    └── [configuration files]
```

### Development Rules
1. Place new components in the `components` folder
2. Add new pages to the `app` folder
3. Store utility functions and helper files in the `lib` folder
4. Keep all requirements documentation in the `requirements` folder
5. Add global styles to `globals.css`
6. Store images in `public/images`
7. Place fonts in `public/fonts`
8. Define animations in `globals.css`

### Component Development
- Create reusable components for common UI elements (e.g., buttons, input fields)
- Implement a main game component to manage the overall game state and logic
- Develop separate components for the configuration menu, question display, and score display

### State Management
- Use React hooks (useState, useEffect) for managing local component state
- Consider using Context API or a state management library for global app state if needed

### Styling
- Utilize Tailwind CSS for styling components
- Ensure responsive design for various screen sizes

### Accessibility
- Implement proper ARIA attributes for improved accessibility
- Ensure keyboard navigation works smoothly throughout the app

### Testing
- Write unit tests for individual components
- Implement integration tests for key user flows

## Next Steps
1. Set up the basic project structure and install necessary dependencies
2. Develop the core game logic (question generation, scoring, timing)
3. Create the main UI components (game screen, configuration menu)
4. Implement animations and user feedback mechanisms
5. Add configuration options and game controls
6. Conduct thorough testing and bug fixing
7. Optimize performance and ensure responsiveness across devices

Remember to commit your changes regularly and document your code as you progress through the development process.
