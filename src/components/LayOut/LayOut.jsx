import React from "react";
import Header from "../../components/header/Header";
const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default LayOut;
