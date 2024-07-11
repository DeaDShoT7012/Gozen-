import React, { createContext, useContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState('Some data');
  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

const MyComponent = () => {
  const { state, setState } = useContext(MyContext);
  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState('New data')}>Change Data</button>
    </div>
  );
};

const Api= () => (
  <MyProvider>
    <MyComponent />
  </MyProvider>
);

export default Api;
