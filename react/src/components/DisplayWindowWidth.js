import React from 'react';
import ComponentComposition from './ComponentComposition';

function DisplayWindowWidth({ windowWidth }) {
  return (
    <div>
        <b>ComponentComposition</b>
      <p>Current Window Width: {windowWidth}px</p>
    </div>
  );
}

export default ComponentComposition(DisplayWindowWidth);
