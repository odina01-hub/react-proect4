import React, { createContext, useState } from "react";

export const LikeProductContext = createContext();

const LikeContext = ({ children }) => {
  const [like, setLike] = useState([]);

  const addToLike = (el) => {
    setLike((prev) => {
      if (!prev.includes(el)) {
        return [...prev, el];
      }
      return prev;
    });
  };

  const removeToLike = (el) => {
    setLike((prev) => {
        return prev.filter((item) => item.id !== el.id);
    });
  };


  return (
    <LikeProductContext.Provider value={{ like, addToLike , removeToLike }}>
      {children}
    </LikeProductContext.Provider>
  );
};

export default LikeContext;
