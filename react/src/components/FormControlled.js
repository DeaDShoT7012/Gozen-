import React, { useState } from 'react'


function FormControlled() {
    const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name submitted: ${name}`);
  };
  return (
    <div className='mt-3'>
        <b>FormControlled</b>
        <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default FormControlled