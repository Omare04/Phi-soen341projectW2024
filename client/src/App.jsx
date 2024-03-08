import { useState } from "react";
import "./global.css";
import Home from "./pages/Home";
import ProtectedRoutes from "./helper/AuthWrapper";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <ProtectedRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
