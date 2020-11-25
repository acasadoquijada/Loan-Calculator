import React, { Fragment, useState } from 'react';
import Header from "./components/Header"
import Form from "./components/Form"
import Msg from "./components/Msg"
import Result from "./components/Result"

function App() {

  const [amount, storeAmount] = useState(0);
  const [numberOfPayments, storeNumberOfPayments] = useState("");
  const [total, storeTotal] = useState(0);

  let component;
  if(total === 0) {
    component = <Msg/>
  } else {
    component = <Result
      total={total}
      numberOfPayments={numberOfPayments}
      amount={amount}
    />
  }

  return (
    <Fragment>
      <Header
        title="Loan Calculator"
      />

      <div className="container">
        <Form
          amount={amount}
          storeAmount={storeAmount}
          numberOfPayments={numberOfPayments}
          storeNumberOfPayments={storeNumberOfPayments}
          total={total}
          storeTotal={storeTotal}/>
        
        <div className="mensajes">
          {component}
        </div>
 
      </div>
    </Fragment>
  )
}

export default App;
