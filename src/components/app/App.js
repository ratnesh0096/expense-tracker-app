import { useState } from "react";
import AddBalance from "../add_balance/AddBalance";
import ShowBalance from "../show_balance/ShowBalance";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [inputNote, setNote] = useState("");
  const [balance, setBalance] = useState(0); // To show main balance.
  const [balanceSheet, setBalanceSheet] = useState([]); //It is database where all transactions are stored

  const newDate = () => {
    let date = new Date();
    function appendZero(number) {
      if (number < 10) {
        number = "0" + number;
      }
      return number;
    }
    return `${date.getDate()} ${date.toLocaleString("default", {
      month: "long",
    })} ${date.getFullYear()} ${appendZero(date.getHours())}:${appendZero(
      date.getMinutes()
    )}:${appendZero(date.getSeconds())}`;
  };

  function setState(flag) {
    const addition = balance + parseInt(input);
    const subtraction = balance - parseInt(input);
    flag ? setBalance(addition) : setBalance(subtraction);
    setBalanceSheet([
      ...balanceSheet,
      {
        id: Date.now(),
        flag: flag,
        note: inputNote,
        date: newDate(),
        expense: flag ? "+" + input : "-" + input,
        currentBalance: flag ? addition : subtraction,
      },
    ]);
    setInput("");
    setNote("");
  }
  const addTransaction = () => {
    if (input > 0 && input < 1000000) {
      setState(true);
    } else {
      alert("Try to put value between 1-1000000");
      setInput("");
    }
  };

  const removeTransaction = () => {
    if (parseInt(input) <= balance && parseInt(input) > 0) {
      setState(false);
    } else {
      alert("You cannot remove amount more than main balance");
      setInput("");
    }
  };
  // A common shared object to avoid passing down so many props. It avoids complexity
  const propObject = {
    INPUT: input,
    SET_INPUT: setInput,
    INPUT_NOTE: inputNote,
    SET_NOTE: setNote,
    BALANCE: balance,
    SET_BALANCE: setBalance,
    BALANCE_SHEET: balanceSheet,
    SET_BALANCESHEET: setBalanceSheet,
    ADD_TRANSACTION: addTransaction,
    RMV_TRANSACTION: removeTransaction,
  };
  return (
    <div className="App">
      <h2 className="heading">Let's track your expenses & SAVE Money !</h2>
      <AddBalance propObject={propObject} />
      <ShowBalance propObject={propObject} />
    </div>
  );
}

export default App;
