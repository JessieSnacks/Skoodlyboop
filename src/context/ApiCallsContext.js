import { createContext, useState, useEffect } from "react";
export const ApiContext = createContext({
  isLoading: false,
  items: null,
});

const url = process.env.REACT_APP_BLOGPOST_API;
const ApiCallsContextProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getAllData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url);
        const result = await res.json();
        setItems(result);
      } catch (error) {
        setIsLoading(false);
        setError(true);
      }
      setIsLoading(false);
    };
    getAllData();
  }, []);

  const value = {
    isLoading,
    items,
    error,
  };
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export default ApiCallsContextProvider;
