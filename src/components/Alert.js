import React from "react";
import { useEffect } from "react";

const Alert = ({ setShowAlert, color, label, text }) => {
  useEffect(() => {
    const timer = setTimeout(() => setShowAlert(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`animate-bounce fixed top-5 left-5 bg-${color}-100 border-l-4 border-${color}-500 text-${color}-700 p-3 text-left w-80 opacity-95 rounded`}
      role="alert"
    >
      <strong>{label}:</strong>
      <p>{text}</p>
    </div>
  );
};

export default Alert;
