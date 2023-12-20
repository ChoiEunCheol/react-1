// ChildComponent.js
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>Data from Parent: {props.data}</p>
    </div>
  );
}

export default ChildComponent;
