import React, { useEffect, useState } from 'react';
import './Transactions.css'

function Transactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/transactions')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTransactions(data);
            })
            .catch(error => console.error("There was an error!", error));
    }, []);

    return (
        <div className="transactions-container">
            <h2>Transactions</h2>
            <table className='transaction-table'>
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
                            <td>{transaction.type}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.transaction_Date}</td>
                            <td>{transaction.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}


export default Transactions;