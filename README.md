# Function Chain Calculator

This web application allows users to execute a chain of mathematical functions. Each function computes an output based on a user-defined equation, and the output is passed as the input to the next function. The application is designed to be easily extendable, allowing the addition of new functions and equations.

## Features

- **Interactive Function Cards**: Each function has its own card where users can define the mathematical equation.
- **Chain of Functions**: Each function passes its output to the next function, creating a sequence of computations.
- **Dynamic Updates**: When users modify an equation or the input value, the output is recalculated, and the changes are sent though every function.
- **Equation Validation**: Only basic arithmetic operations (addition, subtraction, multiplication, division, and exponents) are allowed in the equations.

## Technologies Used

- **React**: The front-end library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds type safety.

## Project Structure

```
/src
  ├── /components
  │   ├── FunctionCard.tsx  # Handles individual function cards and computation
  │   └── App.tsx           # Main component managing function chain logic
  └── /utils
      └── equationUtil.ts       # Utility functions for validating and evaluating equations
```

## Setup

To get started with this project locally, follow the instructions below:

### 1. Clone the Repository

```bash
git clone https://github.com/pranavgoel29/function-chain-calculator.git
cd function-chain-calculator
```

### 2. Install Dependencies

Make sure you have **Node.js** installed. Then, run the following command to install all required dependencies:

```bash
npm install
```

### 3. Run the Development Server

Start the development server by running:

```bash
npm start
```

This will open the application in your browser, typically at [http://localhost:3000](http://localhost:3000).

### 4. Build the Project (Optional)

To build the project for production, run:

```bash
npm run build
```

This will create a `build` folder containing the optimized production build.

## How It Works

1. **Function Cards**:

   - Each function card displays an equation (e.g., `x^2 + 2`) and allows the user to modify it.
   - The user provides an initial value for `x` and can change it at any time.
   - When an equation is updated or a new input is provided, the output is recalculated using basic arithmetic operations.

2. **Function Chain**:

   - The output of one function is passed as the input to the next function in the sequence.
   - The chain can have multiple functions, and new functions can be added easily by modifying the `functions` array in the parent component (`App.tsx`).

3. **Mathematical Validation**:

   - The application only allows basic arithmetic operations (addition, subtraction, multiplication, division, and exponents).
   - The input is validated to ensure only these operations are used in the equations.
   - The application evaluates mathematical expressions using JavaScript's built-in `eval()` function (with validation for safe usage).

4. **Extensibility**:
   - New functions can be added simply by appending objects to the `functions` array in the parent component.
   - Each function object contains an `id`, an equation, the current input value, and the ID of the next function to which the output is passed.

## Future Enhancements

- **Visual Representation**: Add connectors between function cards to visualize the flow of data.
- **Equation Editor**: Provide more advanced functionality for editing equations (e.g., validation on the fly).

## Contributing

Feel free to fork this repository and create a pull request with your contributions! If you find any bugs or have ideas for improvements, please open an issue.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
