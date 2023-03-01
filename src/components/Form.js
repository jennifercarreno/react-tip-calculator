import React, { useState } from 'react'
import './Form.css';

export default function Form() {
    const [bill, setBill] = useState(0)
    const [tipPercent, setTipPercent] = useState(0)
    const [people, setPeople] = useState(0)

    let tip_float = parseFloat(tipPercent)/100;
    let tip_total = parseFloat(tip_float) * parseFloat(bill)
    let bill_total = tip_total + parseFloat(bill);
    let split_bill = (parseFloat(bill_total)/parseInt(people)).toFixed(2);
    

    return(
        <div className="container">
            <form >
                <label>Bill Subtotal</label>
                <input
                    placeholder='Bill Subtotal' 
                    type="number"
                    value={bill}
                    min="0"
                    onChange={(e) => setBill(e.target.value)}
                    />

                <label>Tip</label>
                <input
                    placeholder='Tip' 
                    type="number"
                    value={tipPercent}
                    min="0"
                    onChange={(e) => setTipPercent(e.target.value)}
                    />

                <label>Number of People</label>
                <input
                    placeholder='Number of People' 
                    type="number"
                    value={people}
                    min="1"
                    onChange={(e) => setPeople(e.target.value)}
                    />
            </form>
            <div className="display">
                <h1>Tip: ${tip_total >=0 ? tip_total.toFixed(2) : '$0'}</h1>
                <h1>Total per Person: ${split_bill >=0 ? split_bill : '$0'}</h1>
            </div>
        </div>
    )
}