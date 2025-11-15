import React from "react";
import ReactDom from "react-dom/client";



const AppLayout = () => {
  return (
    <div>
      <h1>Welcome to Swiggy React App</h1>
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
