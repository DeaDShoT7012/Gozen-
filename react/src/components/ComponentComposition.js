import React, { useEffect, useState } from 'react';

function ComponentComposition(WrappedComponent) {
  return function WithWindowWidth(props) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <div>
        <WrappedComponent windowWidth={windowWidth} {...props} />
      </div>
    );
  };
}

export default ComponentComposition;
