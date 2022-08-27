import { useState } from 'react';

const App = () => {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button 
        style={{ backgroundColor: buttonColor }} 
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <br/>
      <input 
        type='checkbox'
        defaultChecked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
