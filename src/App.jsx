import { useState } from "react";

import Header from "./component/Header";
import UserInput from "./component/UserInput";
import Result from "./component/Result";

function App() {
  const [inputUser, setInputUser] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = inputUser.duration >= 1;

  function handleChange(inputIdentifer, newValue) {
    setInputUser((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifer]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputUser={inputUser} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">Please enter the duration greater then 1</p>
      )}
      {inputIsValid && <Result input={inputUser} />}
    </>
  );
}

export default App;
