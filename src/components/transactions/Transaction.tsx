import React, { useEffect, useState } from "react";
import "./Transaction.css";

interface Transaction {
  id: number;
  type: string;
  amount: string;
  transaction_Date: string;
  description: string;
}

function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/transactions")
      .then((response) => response.json())
      .then((data: Transaction[]) => {
        setTransactions(data);
      })
      .catch((error) => console.error("There was an error!", error));
  }, []);

  return (
    <div className="transactions-container">
      <h2>Transactions</h2>
      <table className="transactions-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Transaction Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td data-label="Type">{transaction.type}</td>
              <td data-label="Amount">{transaction.amount}</td>
              <td data-label="Transaction Date">
                {transaction.transaction_Date}
              </td>
              <td data-label="Description">{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
