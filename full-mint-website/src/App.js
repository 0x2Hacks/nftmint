import { useState } from "react";
import './App.css';
import MainMint from "./MainMint";
import NavBar from "./NavBar";
import  { VStack, Box } from "@chakra-ui/react";

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <VStack w="full" spacing={1}>
      <Box>
        <div className="overlay">
          <div className="App">
            <NavBar accounts={accounts} setAccounts={setAccounts} />
            <MainMint accounts={accounts} setAccounts={setAccounts} />
          </div>
          <div className="moving-background"></div>
        </div>
      </Box>
    </VStack>
  );
}

export default App;
