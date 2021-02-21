import React, { useEffect } from "react";

interface DialogProps {
  type: string;
  msg: string;
  remove: (alert?: Alert) => void;
}

export const Dialog: React.FC<DialogProps> = ({ type, msg, remove }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      remove();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [type, msg]);

  return (
    <div className="dialog">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
};
