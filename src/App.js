import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const PRODUCT_CONTEXT = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  const value = {
    data,
  };

  return (
    <div>
      <PRODUCT_CONTEXT.Provider value={value}>
        <RouterProvider router={routes} />
      </PRODUCT_CONTEXT.Provider>
    </div>
  );
}

export default App;
