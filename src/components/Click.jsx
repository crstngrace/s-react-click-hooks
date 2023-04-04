import { useState } from 'react';

const Click = ({ headerText }) => {
  const [clicks, setCount] = useState(0);

  const handleClick = () => {
    setCount((clicks) => clicks + 1);
  };

  return (
    <div className='my-component' onClick={handleClick}>
      <h2>My Component ({clicks})</h2>
      {headerText && <h3>{headerText}</h3>}
    </div>
  );
};

export default Click;
