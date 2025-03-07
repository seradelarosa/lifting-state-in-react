import './App.css';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack.jsx';

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);

  const addIngredient = (ingredientToAdd) => {
    setStack([...stack, ingredientToAdd]);
  };

  const removeIngredient = (ingredientToRemove) => {
    setStack(stack.filter(ingredientInStack => ingredientInStack !== stack[ingredientToRemove]));
  };

  return (
    <main>
      <h1>Borgir Stacker</h1>
      <section>
        <IngredientList 
        ingredients={availableIngredients} 
        addIngredient={addIngredient} 
        />
        <BurgerStack 
        stack={stack} 
        removeIngredient={removeIngredient} 
        />
      </section>
    </main>
  );
};

export default App;

// UI will have two main areas:
// 0. APP 
// This parent component will contain the ingredient list and burger stack
// will also contain stack state and two functions for manipulating that state
// 1. INGREDIENT LIST
// users can select from these ingredients, select, and the selected item will move to the other side
// a ul that renders availableIngredients
// each ingredient should have a button to add the ingredient to the stack
// 2. BORGIR
// as ingredients are added, they'll appear stacked in their selected order, forming a borgir
// a <ul> that renders the elements held in stack.
// each ingredient should have a remove button to remove it from stack

// Here are the user stories for this lab:

// As a user, I want to be able to see a list of the ingredients that can be added to my burger on the left side of the screen.

// As a user, I want to be able to see a stack of the ingredients that make up my burger on the right side of the screen.

// As a user, I want to click a ‘+’ button on an ingredient to add it to my burger stack. This action will place the ingredient on the stack displayed on the right side of the screen, while keeping the original ingredient list on the left unchanged.

// As a user, I want to click an ‘X’ button on an ingredient in my burger stack to remove it. This will take the ingredient off the stack on the right side of the screen, without changing the ingredient list on the left.


