import React, { useState } from 'react';


const ParentComponent = () => {
  const [data, setData] = useState('Initial Data');

  return <ChildComponent data={data} setData={setData} />;
};

const ChildComponent = ({ data, setData }) => {
  return (
    <div>
      <p>Data: {data}</p>
      <button onClick={() => setData('Updated Data')}>Update Data</button>
    </div>
  );
};

export default ParentComponent;
