import React from 'react';

const Result = ({total, numberOfPayments, amount} ) => {
    return (
        <div className="u-full-width resultado">
            <h2>Summary</h2>
            <p>Amount: {amount}</p>
            <p>Number of payments: {numberOfPayments}</p>
            <p>Pay per month: {(total/numberOfPayments).toFixed(2)}</p>
            <p>Total payment: {total.toFixed(2)}</p>
        </div>
    );
}

export default Result;