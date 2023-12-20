// ParentComponent.js
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const parentData = "Hello from Parent!";

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent data={parentData} />
    </div>
  );
}

export default ParentComponent;
