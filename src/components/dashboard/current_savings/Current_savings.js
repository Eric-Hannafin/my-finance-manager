import React, { useEffect, useState } from 'react';
import './Current_savings.css';

function Current_savings() {
    const [transactions, setTransactions] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactions(data);
                const sum = data.reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
                setTotalAmount(sum);
            })
            .catch(error => console.error("There was an error!", error));
    }, []);

    return (
        <div className="current-savings">
            <h4 className='h4-heading'>Cash Balance</h4>
            <div className="total-amount">
                <p className='test'>€{totalAmount.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Current_savings;