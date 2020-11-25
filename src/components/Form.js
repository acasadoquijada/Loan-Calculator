import React, {Fragment, useState} from 'react';

const Form = ({amount, storeAmount, paymentNumber, storePaymentNumber}) => {

    const [error, storeError] = useState(false);

    const calculateLoan = e => {
        e.preventDefault();

        if(amount === 0 || paymentNumber === "") {
            storeError(true);
            return;
        } 

        storeError(false);
    }
    return(
        <Fragment>
<form
onSubmit={calculateLoan}>
          <div className="row">
              <div>
                  <label>Loan amount</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Example: 3000" 
                      onChange={ e => storeAmount(parseInt(e.target.value)) }
                  />
              </div>
              <div>
                  <label>Number of payments</label>
                  <select 
                      className="u-full-width"
                      onChange={ e => storePaymentNumber(e.target.value) }
                  >
                      <option value="">Select</option>
                      <option value="3">3 months</option>
                      <option value="6">6 months</option>
                      <option value="12">12 months</option>
                      <option value="24">24 months</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calculate" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>

    { (error) ?   <p className="error">Fill all the fields</p>: null }

  </Fragment>
    );
}

export default Form;