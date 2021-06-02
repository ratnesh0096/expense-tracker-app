import React from "react";
import "./ShowBalance.css";
import { EditIcon } from "@chakra-ui/icons";

function ShowBalance({ propObject }) {
  return (
    propObject.BALANCE_SHEET.length > 0 && (
      <div className="main-container">
        <p className="user-note">
          User Note : *Hover over transaction to see the note(First add it).
          *Pencil icon will show details of respective transaction.{" "}
        </p>
        {propObject.BALANCE_SHEET.map((transaction) => {
          return (
            <>
              <div className="transaction-container" key={transaction.id}>
                <p className="date">{transaction.date}</p>
                <p className="currentBalance">{transaction.currentBalance}</p>
                <p
                  className="expense"
                  style={
                    transaction.flag
                      ? { color: "rgb(96, 241, 96)" }
                      : { color: "rgb(252, 69, 63)" }
                  }
                >
                  {transaction.expense}
                </p>
                <i className={transaction.flag ? "arrow-up" : "arrow-down"}></i>
                <EditIcon
                  className="edit"
                  w={22}
                  h={22}
                  color={"whiteAlpha.500"}
                  onClick={() =>
                    alert(
                      "Here is detailed information of your transaction" +
                        "\n" +
                        "Transaction ID :" +
                        transaction.id +
                        "\n" +
                        "Note Available :" +
                        transaction.flag +
                        "\n" +
                        "Date & Time :" +
                        transaction.date +
                        "\n" +
                        "Expense: " +
                        transaction.expense +
                        "\n" +
                        "@ Time Main Bal.:" +
                        transaction.currentBalance
                    )
                  }
                />
              </div>
              {transaction.note && (
                <div className="hide">
                  <p>{transaction.note}</p>
                </div>
              )}
            </>
          );
        })}
      </div>
    )
  );
}

export default ShowBalance;
