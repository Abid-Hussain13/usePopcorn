import React from "react";

function DisplayError({ message }) {
  return (
    <div className="error">
      <p>
        <span>⛔</span>
        {message}
      </p>
    </div>
  );
}

export default DisplayError;
