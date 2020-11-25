import React, { Fragment, useState } from 'react';
import Header from "./components/Header"
import Form from "./components/Form"

function App() {

  const [amount, storeAmount] = useState(0);
  const [paymentNumber, storePaymentNumber] = useState("");

  return (
    <Fragment>
      <Header
        title="Loan Calculator"
      />

      <div className="container">
        <Form
          amount={amount}
          storeAmount={storeAmount}
          paymentNumber={paymentNumber}
          storePaymentNumber={storePaymentNumber}/>
      </div>
    </Fragment>
  )
}

export default App;
