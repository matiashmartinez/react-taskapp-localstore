import React from "react";

const Container = ({ children }) => {
  return (
    <div className="container p-2 ">
        <div className="col-md-4 offset-md-4">
        {children}
        </div>
     
    </div>
  );
};

export default Container;
