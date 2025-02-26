import React, { createContext, useState, useEffect } from "react";

export const Addresponsecontext = createContext();

function ContextApi({ children }) {
  const [addresponse, setAddresponse] = useState(false);
  const [authorized, setauthorized] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setauthorized(true);
    } else {
      setauthorized(false);
    }
  }, []); // Runs only once when the component mounts

  return (
    <Addresponsecontext.Provider value={{ addresponse, setAddresponse, authorized, setauthorized }}>
      {children}
    </Addresponsecontext.Provider>
  );
}

export default ContextApi;
