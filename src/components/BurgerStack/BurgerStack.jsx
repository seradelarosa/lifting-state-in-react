

const BurgerStack = ({ stack, removeIngredient }) => {
    return (
      <ul>
        {stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name} 
            <button onClick={() => removeIngredient(index)}>X</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default BurgerStack;