import { useState } from "react";

import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";

function App() {
  const [inputUser, setInputUser] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturns: 6,
    duration: 10,
  });

  function handleChange(inputIdentifer, newValue) {
    setInputUser((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifer]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputUser={inputUser} onChange={handleChange} />
      <Result input={inputUser} />
    </>
  );
}

export default App;
