import React, { useState, useMemo } from 'react';

const ExpensiveComponent = ({ data }) => {
  const computedValue = useMemo(() => {
    return data.reduce((a, b) => a + b, 0);
  }, [data]);

  return <div>Computed Value: {computedValue}</div>;
};

const Ui = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5]);

  return (
    <div>
      <ExpensiveComponent data={data} />
      <button onClick={() => setData([...data, 6])}>Add Number</button>
    </div>
  );
};

export default Ui;
