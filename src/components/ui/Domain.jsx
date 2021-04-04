import React from 'react';

function Domain({ label, children }) {
  return (
    <div className="domain">
      <h4 className="domain-title">{label}</h4>
      {children}
    </div>
  );
}

export default Domain;
