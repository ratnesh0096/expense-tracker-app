import React from "react";
import "./AddBalance.css";

function AddBalance({ propObject }) {
  return (
    <div className="add-balance">
      <h2 className="balance-heading">Total Balance: {propObject.BALANCE}</h2>
      <input
        className="input"
        type="number"
        value={propObject.INPUT}
        onChange={(e) => propObject.SET_INPUT(e.target.value)}
        placeholder="Enter amount >0"
      />
      <br />
      <input
        className="input"
        type="text"
        value={propObject.INPUT_NOTE}
        onChange={(e) => propObject.SET_NOTE(e.target.value)}
        placeholder="What is it about? (Optional)"
      />
      <br />
      <div>
        <button
          className="desposite-button"
          onClick={propObject.ADD_TRANSACTION}
        >
          Deposite
        </button>
        <button
          className="withdraw-button"
          onClick={propObject.RMV_TRANSACTION}
        >
          Withdraw
        </button>
      </div>
    </div>
  );
}

export default AddBalance;
